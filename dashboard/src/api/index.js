import axios from 'axios';

const url = 'https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?';

export const fetchData = async(age) => {
    let changeableUrl = url;

    if(age) {
        changeableUrl= `${url}age=${age}`;
    }

    try {
        const { data: { MyHFHeading, RelatedItems } } = await axios.get(changeableUrl);
        return { MyHFHeading, RelatedItems };
    } catch(error){
        console.log(error);
    }
};

//age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no