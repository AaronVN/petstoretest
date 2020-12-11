export interface Pet {
  id: number;
  name: string;
  status: string;

  category: {
      id: 0,
      name: string
    },
  photoUrls: [
      string
    ],
    tags: [
      {
        id: 0,
        name: string
      }
    ],

}
