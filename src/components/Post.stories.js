import React from 'react';

import Post from './Post';

/**
 * TODO: Know about "status","medium","is_sticky", "is_highlighted", "format","User", diff b/w "desc" and "excerpt","Category" and "Tag"  and date format returned.
 * TODO:
 */

export default {
  title: 'Components/Post',
  component: Post,
};
/* prettier-ignore */
const post = {
  id: 11,
  created_date: '01-01-1998',
  updated_date: '01-01-1998',
  title: 'Who is paying the Train fare for Migrants?',
  subtitle: 'Lorem ipsum dolor, sit amet consectetur',
  slug: '/who-is-paying-the-train-fare-of-migrants',
  status: 'x',
  users: [
    {
      display_name: 'Rakesh',
      media: {
        img: 'https://source.unsplash.com/150x150/?man',
        alt: 'Rakesh',
      },
      slug: 'rakesh',
    },
  ],
  categories: [
    {
      name: 'Business',
      slug: 'business',
    },
    {
      name: 'Politics',
      slug: 'politics',
    },
  ],
  media: {
    url: 'https://source.unsplash.com/640x360',
    alt: 'Lorem, ipsum dolor sit amet',
  },
  excerpt:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ipsam nam consequuntur aliquid excepturi corporis ipsum! Quae deleniti asperiores dolores eum quod incidunt repudiandae amet quos sunt dignissimos. Corrupti.',
  description:'<p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">People from different parts of the world were taken aback when </span><a href="https://edition.cnn.com/2019/08/22/us/iyw-how-to-help-amazon-forest-fires-trnd/index.html" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">images and reports</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">of Amazon forest fires came to light in the recent days. Even in the other parts of the world such as Africa, Europe and Asia, there have been severe forest fires off late. While global warming induced extremities in weather patterns have been associated with fires, there are also many human induced factors which pave the way for forest fires. In this story, we analyse the regional distribution and frequency of forest fires in India.</span></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Number of Forest Fire incidents in India have increased in the recent years</strong></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Every year, there are numerous cases of </span><a href="http://www.mospi.gov.in/publication/envistats-india-2019-voli-environment-statistics" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">forest fire incidents</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">recorded across India. The data in the chart below contains forest fire incidents recorded up to June 2019. Hence the data for 2019 is incomplete.</span></p><p><br></p><p><img src="https://source.unsplash.com/640x360"></p><p><br></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Though the graph looks highly staggered at the first glance, since 2015, the numbers show a stark increase in the number of such incidents. The cases have increased from 15,937 in 2015 to 37,059 in 2018 amounting to a shocking 133% increase. The 2019 figure is also expected to surpass the 2018 figure since we have the data only for 6 months.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Among the other years, the number of incidents in 2010 and 2012 were also remarkably high- 30,892 and 29,362 respectively. The </span><a href="http://www.imd.gov.in/press_release/20190116_pr_404.pdf" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">Indian Meteorological Department</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">reported in 2018 that 11 of the 15 warmest years recorded in India since 1901, were between 2004 and 2008. The report further noted that 2018 marked the sixth warmest year with 2016, 2009, 2017, 2010 and 2010 being the top five hottest years in that order. The years 2009, 2012 and 2016 were recorded as drought years in India as per the </span><a href="http://fsi.nic.in/forest-report-2017" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">Forest Survey of India</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">.</span></p><p><br></p><p><span style="color: rgb(59, 59, 59);">In the </span><a href="http://117.239.115.41/smsalerts/index.php" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">Forest Fire Alert system</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">website of the Forest Survey of India, in 2019, the largest number of fire alerts was sent in the months of March and April. Since, November 2018, Madhya Pradesh, Mizoram, Maharashtra, Odisha and Assam in the same order are the top five states with the largest number of fire alerts till date.</span></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Central Indian states and North Eastern states together account for 76% of the Forest Fire incidents in the last decade</strong></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">For the purpose of this analysis, states and union territories have been categorised into six regions. This grouping is based on the categorization given in the Forest Survey of India report.</span></p><p><br></p><table><tbody><tr><td data-row="true"><strong>Region</strong></td><td data-row="true"><strong>States &amp; UTs</strong></td></tr><tr><td data-row="row-c7g2"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Southern States</span></td><td data-row="row-c7g2"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Andhra Pradesh, Goa, Karnataka, Kerala, Tamil Nadu, Telangana, Andaman and Nicobar Islands, Lakshadweep and Puducherry</span></td></tr><tr><td data-row="row-tumx"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Himalayan States</span></td><td data-row="row-tumx"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Himachal Pradesh, Jammu and Kashmir and Uttarakhand</span></td></tr><tr><td data-row="row-cvzb"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Northern States</span></td><td data-row="row-cvzb"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Bihar, Delhi, Punjab, Haryana, Uttar Pradesh and Chandigarh</span></td></tr><tr><td data-row="row-dx5q"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Western States</span></td><td data-row="row-dx5q"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Gujarat, Rajasthan, Dadra and Nagar Haveli and Daman and Diu</span></td></tr><tr><td data-row="row-bi4m"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Central States</span></td><td data-row="row-bi4m"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Chhattisgarh, Maharashtra, Madhya Pradesh, Jharkhand, Odisha and West Bengal</span></td></tr><tr><td data-row="row-q3we"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">North Eastern States</span></td><td data-row="row-q3we"><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim and Tripura</span></td></tr></tbody></table><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">As per the data available for the last 10 years, the Central Indian states are more prone to forest fires. About 40% of the cases of forest fires reported since 2009 have been in Central India. Not far behind, the North Eastern states where shifting cultivation is still prevalent account for 36% of the incidents. On the other hand, the Southern states account for 14% of the incidents, Western states for 1.5%, Northern states for&nbsp;3.8% of the incidents and Himalayan states accounted for 4% of the incidents. The Forest Survey of India has reported that the maximum number of incidents has been reported in ‘Tropical Moist Deciduous’ forests. This is followed by ‘Tropical Dry Deciduous’ and ‘Tropical Semi- Evergreen forests’.</span></p><p><br></p><p><img src="https://source.unsplash.com/640x360"></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Odisha recorded the largest number of Forest Fire incidents between 2009 and 2018</strong></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">State wise analysis of the total number of forest fire incidents between 2009 &amp; 2018 reveals that the largest number of incidents was reported in Odisha with almost 23,000 incidents. Chhattisgarh, Madhya Pradesh and Mizoram have also each recorded 20,000 incidents of forest fires during this period. Following the bifurcation of Andhra Pradesh and Telangana, the number of incidents which have been recorded under Andhra Pradesh earlier has come down. The combined number of forest fire incidents in these two states during this period is 22,424 which is the second highest. In the following chart, the top ten states in terms of number of forest fire incidents reported since 2009 have been listed.</span></p><p><br></p><p><img src="https://source.unsplash.com/640x360"></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">In the last three financial years, from 2016-17 to 2018-19, a total of</span><a href="http://164.100.24.220/loksabhaquestions/annex/171/AU42.pdf" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">&nbsp;₹ 125 crores</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">has been released for providing financial assistance to the states and union territories that were affected by forest fires. During the </span><a href="http://164.100.24.220/loksabhaquestions/annex/171/AU4512.pdf" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">same period</a><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">, land area of 180,342 hectares was affected. A total of 21 people lost their lives in related incidents in 2018 and one died in 2019. In addition to this, economic loss of around ₹ 10 crores was also estimated.</span></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">What is the National Action Plan on Forest fires?</strong></p><p><a href="http://164.100.24.220/loksabhaquestions/annex/171/AU5623.pdf" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">Forest fire prevention</a> <span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">and management fall under the state’s purview. Each state government and state forest department have their own forest fire management plans. The Ministry of Environment provides financial assistance to the states for the different measures taken by them which fall under the Centrally Sponsored Forest Fire Prevention and Management Scheme such as creation and maintenance of fire lines, storage of water in forest areas, appointment of firewatchers, purchase of necessary equipment, awareness, involving the communities living in these areas and conservation of soil.</span></p><p><br></p><p><span style="color: rgb(59, 59, 59);">Forest Survey of India has also developed an SMS warning system which sends fire alerts based on satellite data to those registered. The government has also come up with a </span><a href="https://www.forests.tn.gov.in/app/webroot/img/NAPFF-Final%20Draft%2023.04.2018.pdf" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">National Action Plan on Forest Fire</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">which addresses the actions to be taken pre and post forest fires. The </span><a href="https://pib.gov.in/newsite/PrintRelease.aspx?relid=184058" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">Ministry</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">also released a report in October 2018, made in collaboration with the World Bank titled </span><a href="http://documents.worldbank.org/curated/en/333281529301442991/pdf/127284-Forest-Fire-Prevention-Management-8Oct2018.pdf" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">‘Strengthening forest fire management in India’</a> <span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">claiming that it would help India attain its long term climate change goal. The report discusses the policies on forest fire prevention and management and how to fight forest fires. According to this World Bank report, every year, India faces a loss of ₹ 1,100 crores because of forest fires. The social and ecological losses are also in plenty. The report stresses on the need for formulating appropriate policies involving proper guidelines and framework to deal with forest fires and forest management.</span></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Sustainable Forest management is the need of the hour</strong></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Forest fires can occur unintentionally, due to natural reasons such as reduced moisture and high temperatures or ignorance of the people or deliberately when people set forests ablaze in order to acquire land for cultivation or to encroach. Recurring forest fires in short intervals have significant implications on the biodiversity. Though, it aids in regeneration of ecosystem, increased frequency will dwindle the biodiversity- both flora and fauna. The communities living in fringes of forests or within forests are highly susceptible since their lives as well as their livelihood are at stake when forests burn. Fires can also affect the crops grown on the adjacent plots. Sustainable forest management system needs to be implemented with the involvement of local communities in order to ensure that their needs are addressed simultaneously ensuring conservation of forests and biodiversity.</span></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(59, 59, 59);">Featured Image: </strong><a href="https://cdn.downtoearth.org.in/library/large/2019-02-27/0.77835200_1551272216_0.jpg" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(229, 78, 83);">Forest fires in India</a></p><p><br></p>',
  tags: [
    {
      name: 'Politics',
      slug: 'politics',
    },
    {
      name: 'GOI',
      slug: 'goi',
    },
  ],
};
/* prettier-ignore */
const factcheck = {
  id: 12,
  created_date: '01-01-1998',
  updated_date: '01-01-1998',
  title: 'Who is paying the Train fare for Migrants?',
  subtitle: 'Lorem ipsum dolor, sit amet consectetur',
  slug: '/who-is-paying-the-train-fare-of-migrants',
  status: 'x',
  users: [
    {
      display_name: 'Rakesh',
      media: {
        img: 'https://source.unsplash.com/150x150/?man',
        alt: 'Rakesh',
      },
      slug: 'rakesh',
    },
  ],
  categories: [
    {
      name: 'Business',
      slug: 'business',
    },
    {
      name: 'Politics',
      slug: 'politics',
    },
  ],
  media: {
    url: 'https://source.unsplash.com/640x360',
    alt: 'Lorem, ipsum dolor sit amet',
  },
  excerpt:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ipsam nam consequuntur aliquid excepturi corporis ipsum! Quae deleniti asperiores dolores eum quod incidunt repudiandae amet quos sunt dignissimos. Corrupti.',
  description: '<p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">So clearly, it was not a case simply submitting one of the given documents. Factly has earlier provided answers to&nbsp;</span><a href="https://factlystag.wpengine.com/part-2-faqs-on-the-nrc-issue/" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">some FAQs</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">&nbsp;on the NRC.</span></p><p><br></p><p><span style="color: rgb(59, 59, 59);">As per the&nbsp;</span><a href="http://www.nrcassam.nic.in/pdf/English%20-Press%20Brief%2031st%20August%202019.pdf" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">draft NRC</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">&nbsp;published in 2019 for Assam, 19 lakh people have been left out of the NRC list, about 5% of the population of Assam.</span></p><p><br></p><p><span style="color: rgb(59, 59, 59);">In an interview recently, Union Home Minister,&nbsp;Amit Shah&nbsp;</span><a href="https://www.youtube.com/watch?v=mENwVWT4Uvc" rel="noopener noreferrer" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">did state that</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">&nbsp;Aadhaar, Voter ID etc are not proofs of Citizenship.</span></p>',
  tags: [
    {
      name: 'Politics',
      slug: 'politics',
    },
    {
      name: 'GOI',
      slug: 'goi',
    },
  ],
  claims: [
    {
      id: 115,
      created_date: '02-02-2020',
      updated_date: '03-02-2020',
      title:
        'During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.',
      slug: 'fackcheck10255',
      claim_date: '25-05-1990',
      checked_date: '30-05-1990',
      claim_source: 'Facebook',
      description: 'During Partition, the minority population which stayed back in Pakistan was 23% and 30% in West and East Pakistan respectively.',
      review:
        'While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False.',
      review_tag_line: 'String',
      review_sources: 'String',
      space_id: 1,
      claimant: {
        id: 123,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Jaggi Vasudev',
        slug: 'jaggi',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupted',
        tag_line: 'lorem',
        medium: {
          src: 'https://source.unsplash.com/150x150',
          alt: 'loremmmm',
        },
        space_id: 21,
      },
      rating: {
        id: 111,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'False',
        slug: 'false',
        description:
          'While there is no conclusive data regarding share of minorities, Hindus who stayed back is West Pakistan as of 1951 were only 1.6% , much less than 23% quoted by Jaggi Vasudev. Even the number quoted for East Pakistan is wrong. Hence the statement is False.',
        numeric_value: '1',
        medium: {
          src: 'https://source.unsplash.com/150x150',
          alt: 'loremmm',
        },
        space_id: 21,
      },
    },
    {
      id: 115,
      created_date: '02-02-2020',
      updated_date: '03-02-2020',
      title: 'Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC',
      slug: 'fackcheck10256',
      claim_date: '25-05-1990',
      checked_date: '30-05-1990',
      claim_source: 'Facebook',
      description: 'Birth certificate, Aadhar, Voter ID etc and other documents as proof for NRC',
      review:
        'While there is no official notification on the documents which needs to be provided for NRC, the experience from Assam NRC shows that proving citizenship is not about simply submitting one of the documents as stated by Jaggi Vasudev. Hence this statement is Misleading.',
      review_tag_line: 'String',
      review_sources: 'String',
      space_id: 21,
      claimant: {
        id: 126,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Facebook',
        slug: 'fb',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupted',
        tag_line: 'lorem',
        medium: {
          src: 'https://source.unsplash.com/150x150',
          alt: 'loremmmm',
        },
        space_id: 21,
      },
      rating: {
        id: 116,
        created_date: '20-06-2020',
        updated_date: '20-12-2020',
        name: 'Misleading',
        slug: 'misleading',
        description: '',
        numeric_value: '2',
        medium: {
          src: 'https://source.unsplash.com/150x150',
          alt: 'loremmm',
        },
        space_id: 21,
      },
    },
  ],
};
export const Basic = () => <Post post={post} />;

export const FactCheckPost = () => <Post post={factcheck} />;
