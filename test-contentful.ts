import { createClient } from 'contentful';
import * as dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

async function run() {
  const data = await client.getEntries({ content_type: 'product', 'sys.id': '2tKj4VbF37oK4A8W5O3W2M' });
  // let's just query everything
  const all = await client.getEntries({ content_type: 'product', locale: '*' });
  const first = all.items[0];
  console.log(JSON.stringify(first.fields.slug, null, 2));
}

run();
