import { ui } from '@/i18n/ui';
import { CustomBtn, CustomBtnB } from '@/ui/buttons';
import { useEffect, useRef, useState, type FormEventHandler } from 'react';
import { templateID } from '@/libs/emailjs';

const ContactForm = ({ local }: { local: "en" | "it" }) => {
  const [formToggle, setFormToggle] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault(); // Fix: Call preventDefault properly
    const formData = new FormData(formRef.current!);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let companyName = formData.get('companyName');
    let mobile = formData.get('mobile');
    let email = formData.get('email');
    let message = formData.get('message');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateID,
          templateParams: {
            name: `${firstName} ${lastName}`,
            mobile: mobile,
            companyName: companyName,
            email: email,
            message: message,
          }
        })
      });

      if (response.ok) {
        formRef.current?.reset();
        setFormToggle(false);
      } else {
        console.error('Email sending failed:', await response.text());
        return { success: false, error: 'Failed to send email.' };
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: 'Failed to send email.' };
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && formRef.current && formToggle) {
      const clickOutside = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
          setFormToggle(false);
        }
      };

      document.addEventListener('click', clickOutside);

      return () => {
        document.removeEventListener('click', clickOutside);
      };
    }
  }, [formToggle]);

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="max-w-[36ch]">
        {ui[local]['contact us'].details['contact form'].text}
      </p>
      <CustomBtn
        style={{
          display: formToggle ? 'none' : 'flex',
        }}
        invert
        className="uppercase"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event propagation
          setFormToggle((prev) => !prev);
        }}
      >
        {ui[local]['contact us'].details['contact form'].btnName}
      </CustomBtn>
      {formToggle && (
        <form
          ref={formRef}
          style={{
            height: formToggle ? 'auto' : '0',
          }}
          onSubmit={handleSubmit}
          className={`flex items-start overflow-hidden duration-300 flex-col w-full justify-center p-6 md:p-10 border-2 border-vim-blue shadow rounded-xl`}
          onClick={(e) => e.stopPropagation()} // Prevent event propagation
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="grid sm:grid-cols-2 w-full gap-4">
              <label className="flex flex-col gap-1 w-full">
                <h4>{ui[local].sections['get-in-touch'].form['first-name']}*</h4>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="py-2 px-3 rounded-xl bg-white/10 border w-full"
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <h4>{ui[local].sections['get-in-touch'].form['last-name']}*</h4>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="py-2 px-3 rounded-xl bg-white/10 border w-full"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 w-full">
              <h4>{ui[local].sections['get-in-touch'].form['company-name']}</h4>
              <input
                name="companyName"
                required
                type="text"
                className="py-2 px-3 rounded-xl bg-white/10 border w-full"
              />
            </label>
            <div className="grid sm:grid-cols-2 w-full gap-4">
              <label className="flex flex-col gap-1 w-full">
                <h4>{ui[local].sections['get-in-touch'].form.email}*</h4>
                <input
                  type="text"
                  name="email"
                  required
                  className="py-2 px-3 rounded-xl bg-white/10 border w-full"
                />
              </label>
              <label className="flex flex-col gap-1 w-full">
                <h4>{ui[local].sections['get-in-touch'].form.mobile}</h4>
                <input
                  type="text"
                  name="mobile"
                  className="py-2 px-3 rounded-xl bg-white/10 border w-full"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 w-full">
              <h4>{ui[local].sections['get-in-touch'].form['your-message']}</h4>
              <textarea
                rows={4}
                name="message"
                className="py-2 px-3 rounded-xl bg-white/10 border w-full"
              ></textarea>
            </label>
          </div>
          <CustomBtnB invert type="submit" className="uppercase mt-4">
            {ui[local].buttons['send message']}
          </CustomBtnB>
        </form>
      )}
    </div>
  );
};

export default ContactForm;




