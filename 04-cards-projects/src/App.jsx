import React from 'react'
import { Bookmark } from 'lucide-react';
import Card from './components/Card'

const app = () => {

  const jobs = [
  {
    brandlogo:  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "California, USA"
  },
  {
    brandlogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Los Angeles, USA"
  },
  {
    brandlogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    name: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Seattle, USA"
  },
  {
    brandlogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.Z0WaAEp4fOq3Q92Idq29cwHaHa?pid=Api&h=220&P=0",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://tse2.mm.bing.net/th/id/OIP.iSFgExZ4_qX3-A0ComajlAHaEK?pid=Api&h=220&P=0",
    name: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://tse2.mm.bing.net/th/id/OIP.8IxSTRR_RjmMtUAT7nAT7gHaHa?pid=Api&h=220&P=0",
    name: "LinkedIn",
    datePosted: "5 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "San Francisco, USA"
  }
];



  return (
    
    <div className='parent'>
      {
        jobs.map(function(elem,idx){
          return <div key={idx}>
            <Card  companyname ={elem.name} post ={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay = {elem.pay} brandlogo={elem.brandlogo}datePosted={elem.datePosted} location={elem.location}/>
        
          </div>
        }
        )
      }
    </div>
  )
}

export default app
