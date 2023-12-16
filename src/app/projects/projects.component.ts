import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../model/company-details';
export {CompanyDetails} from '../model/company-details' 
import { Positions } from '../model/Postions';
import { Education } from '../model/education';
import { Certifications } from '../model/certifications';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit
 {

  constructor() { }
  data?:Education[];
  ngOnInit(): void {
    this.data=this.education
  }
     
  durationConverter(StartDate:Date,EndDate:Date|null){

    let cur_date=new Date();
    if(EndDate!=null){
      let years=EndDate.getFullYear()- StartDate.getFullYear();
    let months=EndDate.getMonth() - StartDate.getMonth();
    let total_months=years*12 +months;
    let remainingYears = Math.floor(total_months / 12);
    let  remainingMonths = total_months % 12;
    if(remainingYears<1){
      return ` ${remainingMonths} mos`
    }
    return `${remainingYears} Years, ${remainingMonths} mos`
    }

    let years=cur_date.getFullYear()- StartDate.getFullYear();
    let months=cur_date.getMonth() - StartDate.getMonth();

    let total_months=years*12 +months;

    let remainingYears = Math.floor(total_months / 12);
    let  remainingMonths = total_months % 12;

    return `${remainingYears} Years, ${remainingMonths} mos`
  }
  TrainingStartDate: Date = new Date('2022-03-15');
  trainingEnddate:Date= new Date('2022-09-28');
  engineerStartDate:Date =new Date('2022-09-28')
  nullDate:Date|null=null
   
  job_duration=this.durationConverter(this.engineerStartDate,this.nullDate);
  training_duration=this.durationConverter(this.TrainingStartDate,this.trainingEnddate);
  total_duration =this.durationConverter(this.TrainingStartDate,this.nullDate);
  

  education:Education[]=[
    { 
      imgurl:"https://media.licdn.com/dms/image/C4E0BAQEjf2OL5gY0Qg/company-logo_100_100/0/1631025991325/gandhi_institute_for_technological_advancement_logo?e=1707350400&v=beta&t=QLNmLsuGUhMk6twp8SpiH6-uFYgCtSNs03FU9Pn-F3o",
      collegeName:'Gandhi Institute for Technological Advancement',
    class:"Bachelor of Technology - BTech, Electronics and Communication Engineering (ECE)",
    duration:"Aug 2018 - Jul 2022",
    grade:"Grade: 9.18 CGPA"
  },
  { imgurl:"https://pbs.twimg.com/profile_images/1645719908247031808/GQDKrxnF_400x400.jpg",
    collegeName:'R R college sheohar',
    class:"Senior Secondary 10+2",
    duration:"Jun 2016 - Apr 2018",
    grade:"Grade: 68 %"

  },
  {imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFU6l5p8J57956r9pUYNkhRHVQNibQV2CuQ&usqp=CAU",
    collegeName:'DAV Public School, Muzaffarpur',
    class:"High school",
    duration:"Apr 2015 - May 2016",
    grade:"Grade: 10 CGPA"
  }

  ]
  position:Positions[]=[{desigination:"Project Engineer",
  jobtype:"Full time",duration:"Sep 2022 - Present ·" +`${this.job_duration}`,description:"",skills:"Java · Angular · Spring Boot · Snowflake"},
  {desigination:"Velocity Trainee",
  jobtype:"Apprenticeship",duration:"Mar 2022 - Sep 2022 ·" +`${this.training_duration}`,description:"Trainee at Wipro Velocity Program (Wipro Turbo)",skills:"Microservices · Java · Angular · Spring Boot"}]
 compDetails:CompanyDetails[]=[
  {cname:"Wipro",tenure:this.total_duration,location:"Bengaluru, Karnataka, India",Positions:this.position},
  // {cname:"Wipro",tenure:"1 Yr 9 mos",location:"Bengaluru, Karnataka, India",Positions:this.position}

  ]

  certificates:Certifications[]=[
    
    { imgurl:"https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264050886/amazon_web_services_logo?e=1707350400&v=beta&t=kwgisLiACP98lzJcNV1WXXYZC9ni8dvLF_vC5oeU6U0",
      cert_name:"Aws cloud practitioner",
      cert_provider:"Amazon Web Services (AWS)",
      cert_validation:"Issued Apr 2023",
     validation_url:"https://www.credly.com/badges/442b9df3-5467-43ec-ace8-49a6f2d5fe61/whatsapp"},

    { imgurl:"https://media.licdn.com/dms/image/C4D0BAQHgjlXML6ps5A/company-logo_100_100/0/1660622018973?e=1707350400&v=beta&t=koQKkON2dMWAPbxFH-7rYGyatWn_9NqA_hoU7Aj2OQ4",
      cert_name:"Java Full Stack Certificate",
      cert_provider:"StackRoute",
      cert_validation:"Issued Jul 2022",
      validation_url:"https://verifyawards.stackroute.in/verify?url=https://awards.stackroute.in/public/assertions/Fuyk_OxPQuefqe2JZAUt4w.json?v=2_0"
    },

    { imgurl:"https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264050886/amazon_web_services_logo?e=1707350400&v=beta&t=kwgisLiACP98lzJcNV1WXXYZC9ni8dvLF_vC5oeU6U0",
      cert_name:"AWS technical accreditation",
      cert_provider:"Amazon Web Services (AWS)",
      cert_validation:"Issued Nov 2022",
      validation_url:"https://www.credly.com/badges/474f2979-e626-4acc-a506-5ce84a6258e5/whatsapp"
  }
  ]
  


}
