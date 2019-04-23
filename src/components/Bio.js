import React, {Component} from 'react';

/**
* React Component to Render Aron Roberts Bio
* @author [Aron Roberts](https://github.com/robotros)
*/
class Bio extends Component {
  state ={ }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='container'>
        <h1>A Life Worth Living</h1>
        <h2>Early Life</h2>
        <p>Aron Roberts grew up in the quaint community of Whittier, a small town in the Los Angeles area.
         He was the younger of 2 brothers and grew up in the same home that his father had. His father was a hard working American whose family had been in the country since the colonies. His mother was a peruvian who had found love abroad and moved to the United States to start a family.</p>
         <p>Aron Roberts had a well rounded education in his youth, attending a private Lutheran school until highschool.
         Aron Roberts was first exposed to public education for highschool and attended the local highschool that his brother was also going to.
         Here Aron struggled adjusting and often found himself alone or bullied. While early on, highschool proved to be an especially difficult, Aron learned alot about himself and others during this time.
         He eventually settled into a small group of friends and met the woman that he would one day get to call his wife.</p>

        <h2>College Years</h2>
        <p>During Aron's collegiate years he thrived. These are the years that would forever define who Aron Roberts became.
        Aron attended California State University Long Beach and eventually graduated with his B.S. in computer science.
        It was not his acedemic accolades that he would define his life by though. During this time Aron Roberts Co-Founded WMPQ Gaming, a positive community for online gaming.
        WMPQ Gaming would eventually lead to life long friendships and long lasting satisfaction.</p>
        <p>In order to support his hobbies Aron Roberts worked through most of college. Aron was a Physical Education Instructor, a coach, a referee , a caterer, and technology consultant.
        These experiences allowed him to see many different industries and business as well as develop a strong work ethic.</p>
        <h2>Adulthood and Beyond</h2>
        <p>Shortly after graduating college Aron Married his highschool sweetheart and then left his long-term job as an IT manager at a refrigeration company.</p>
        <p>Aron Roberts has been part of many successful and failed business. He has grown to learn what makes a business strong and what struggles can lead to failure.
        Aron Roberts is currently President of Robotros Technologies, Chairman of WMPQ Gaming, A board member for Acclaimed Pest Control, and Data Analyst at Jarrow Formulas.
        Where Aron's journey will go from here is still a mystery, but he is well equiped for whatever challenges life still has in store.</p>
      </div>
    );
  }
}

export default Bio;
