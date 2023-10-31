let age_month;
let age_year;
function validdob(){
   const birthdate=document.getElementById('dob').value;
   const birthdate_split=birthdate.split('-');

   const birthdate_year=birthdate_split[0];
   const birthdate_month=birthdate_split[1];
   const birthdate_day=birthdate_split[2];

   const currentdate=new Date();
     if(birthdate_year==currentdate.getFullYear() &&
      birthdate_month<=currentdate.getMonth())
       {
          age_month=currentdate.getMonth() - birthdate_month;
          age_year=currentdate.getFullYear() - birthdate_year;
          document.getElementById('result').innerHTML="your age is "+ age_year+"years ,"+ age_month+"motnths old";
       }
     else if(birthdate_year>currentdate.getFullYear() || birthdate_month>currentdate.getMonth() )
      {
         document.getElementById('result').innerHTML="Please Enter Valid Date of Birth";
      }
     else
        {
          age_month=currentdate.getMonth() - birthdate_month;
          age_year=currentdate.getFullYear() - birthdate_year;
          document.getElementById('result').innerHTML="your age is "+age_year+"years ,"+age_month+"motnths old";

        }
    }