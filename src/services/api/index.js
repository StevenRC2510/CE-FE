import axios from 'axios';

export const Api = {
    uri : 'https://api.cebroker.com/v2/',
    courses: {
        featuredCourses: 'featuredCoursesProfession?profession=36',
        courses:'search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27',
    }

};

export const getApi = async (rute) => {
    try {
        const { data } = await axios.get(rute)
        return {
            data,
            message: 'Success',
            error: false
        }
    } catch(err){
        return {
            message: 'Problems accessing the courses',
            err
        }
    }
}
