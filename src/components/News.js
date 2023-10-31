import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from './ThemeContext';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
});

const News = () => {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);
  const newsItems = [
    {
      title: "MCU Phase 4 Director Reignites MCU Vs. DCEU Debates",
      date: "10/10/2023",
      content: "The never-ending debate about the Marvel Cinematic Universe and the DCEU continues after director Mohamed Diab, who worked on Moon Knight in Phase 4, gives his thoughts about the two gargantuan superhero franchises. Even before they were major Hollywood movie franchises, there has always been a rivalry between the DC and Marvel audiences. Whether it is about which has the stronger superheroes, the better storylines, or the best rogue's gallery, there are plenty of aspects that can be debated about when it comes to DC and Marvel..."
    },
    {
      title: "“Just Like That”: F9’s Car In Space Stunt Got 1 Thing Very Right, Astronaut Reveals",
      date: "10/10/2023",
      content: "Real-life astronaut Chris Hadfield breaks down F9: The Fast Saga's scenes in outer space, explaining that there's one thing the movie actually gets right. Released in 2021, the ninth film in the mainline Fast & Furious franchise sees Vin Diesel's Dominic Toretto return to face off against his estranged brother. The film features some of the most over-the-top action in the series, with one memorable sequence seeing Roman (Tyrese Gibson) and Tej (Ludacris) get launched into outer space in a Pontiac Fiero..."
    },
    {title: "Spider-Man Across The Spider-Verse Reveal Makes 1 Scene Even More Mind-Blowing",
    date: "10/10/2023",
    content: "A Spider-Man: Across the Spider-Verse reveal makes one of the movie's best scenes even more shocking. While he does not debut in the Marvel Cinematic Universe, Miles Morales is doing quite well in the animated Spider-Verse. Miles traverses many different universes in Spider-Man: Across the Spider-Verse; however, one of the universes that the character didn't visit was responsible for one of the movie's most surprising and exciting scenes, which has now been made more mind-blowing..."
    },
    {title: "Ke Huy Quan's Forgotten Marvel Movie Role Resurfaces In 23 Year Old Video",
    date: "10/10/2023",
    content: "Following Loki season 2's debut, a 23-year-old video resurfaces, revealing Ke Huy Quan's forgotten Marvel movie role. Before he joined the Marvel Cinematic Universe as part of Loki season 2's cast, Quan had an important part to play in a past Marvel movie. The actor now stars as the vibrant O.B. opposite Tom Hiddleston's Loki and Owen Wilson's Mobius M. Mobius in the Disney+ series, but his previous Marvel role was very different On Twitter, an old video from the set of 2000's X-Men shared by @MarveIFacts showcases the Loki star's role as a stunt choreographer for the Marvel film..."
    }
    
  ];

return (
  <div className="news-section" style={{backgroundColor: theme.backgroundColor}}>
    <Typography variant="h5" style={{ backgroundColor: theme.backgroundColor,color: '#3f51b5', fontWeight: 'bold', marginLeft: '20px', fontSize: '2em' }}>News</Typography>
    <Grid container spacing={3}>
      {newsItems.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.content}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1">{item.date}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);
};

export default News;