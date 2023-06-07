import { createClient } from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
export const client = createClient({
    projectId: 'epwyl6el',
    dataset: 'production',
    apiVersion: '2023-04-08',
    useCdn: true,
    token: 'skeG5MjfMOiN01bO5KDEfIDM8RkVL1FPOnWUJi1kUDsSCBKdz73rVZbUztH5vr4c3UugeEY0kUeLAzDZWcIjP6J2mkJVYTo2KBeEY3dZEv2CP7vjQVED3jOI7AKyjvh81xedyioer4mL7TRXMDVRONyzUlYt1ZyGsgAri6kUYT5bqoPZ7F7J'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)