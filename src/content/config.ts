import { z, defineCollection } from "astro:content";
const coffees =
  defineCollection({
      type: "data",
      schema: z.object({
        origin: z.string(),
        title: z.string(),
        price: z.number(),
        image_src:z.string(),
        image_alt: z.string()
      })
  });

  export const collections = {
    coffees,
  };