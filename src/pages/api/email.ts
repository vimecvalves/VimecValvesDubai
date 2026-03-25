import type { APIRoute } from "astro";
import { publicID, serviceID } from "@/libs/emailjs";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { templateID, templateParams } = body;

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: publicID,
        template_params: templateParams,
      }),
    });

    if (res.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      const errorText = await res.text();
      console.error("EmailJS API Error:", errorText);
      return new Response(JSON.stringify({ success: false, error: errorText }), { status: 400 });
    }
  } catch (err) {
    console.error("API endpoint error:", err);
    return new Response(JSON.stringify({ success: false, error: String(err) }), { status: 500 });
  }
};
