// This file contains utility methods and variables

class Utils {

    genreList(){
        return(
            [
                "Action",
                "Family",
                "Drama",
                "Teen",
                "Comedy",
                "Crime",
                "Documentaries",
                "Horror",
                "Fantasy",
                "Romance",
                "Sports",
                "Sci-Fi"
              ]
        )
    }

    testimonials() {
        return(
            [
                {
                  year: "2025",
                  title: "Reunited with my father and healed generational trauma",
                  description:
                    "My father walked out on my family since I was 5 years old. I resolved to never have anything to do with him till the day I discovered we both enjoy Chicklit movies. I guess the apple doesn't fall far from the tree.",
                },
                {
                  year: "2025",
                  title: "Get a hold of your health",
                  description:
                    'I used to be overweight and unable to find the motivation to make the changes I desperately wanted to make in my life. That was until I happened to watch a Ryan Gosling exercise montage in the movie "Gray Man". Now I exercise everyday and I am healthier than ever!',
                },
                {
                  year: "2024",
                  title: "Overcome your fears, find your soulmate",
                  description:
                    "Find love in the face of fear – I could never work up the courage to ask out the woman I loved until I resolved to ask her out to the cinema on a whim. This was 10 years ago, now we are happily married with two children and one more on the way",
                },
              ]
        )
    }

    reasons(){
       return(
        [
            {
              title: " Escape Reality & Experience New Worlds",
              description:
                "Movies transport you beyond your daily routine, immersing you in breathtaking worlds, intense dramas, and thrilling adventures. Whether it’s a sci-fi epic, a fantasy kingdom, or a heartwarming romance, every film is a new journey.",
            },
            {
              title: "Emotional Connection & Pure Entertainment",
              description:
                "Movies make you laugh, cry, cheer, and think—sometimes all at once! They create emotional connections with characters and stories, offering a perfect blend of fun, suspense, and excitement.",
            },
            {
              title: "Discover New Perspectives & Cultures",
              description:
                "From Hollywood blockbusters to international cinema, movies expose you to different cultures, traditions, and viewpoints. They help you understand the world through diverse storytelling and unique narratives.",
            },
            {
              title: "The Ultimate Social & Relaxation Experience",
              description:
                "Whether it’s a cozy solo night, a fun date, or a movie marathon with friends, films bring people together. Plus, nothing beats the thrill of a gripping story paired with your favorite snacks!",
            },
          ]
       )
    }
}

export default new Utils()