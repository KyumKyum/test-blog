import axios from "axios";

//async function fetchVerse(){}


const fetchVerse = async (book:string): Promise<string> => {
    const url = 'https://api.esv.org/v3/passage/text/?q=' + book;
    
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': process.env.NEXT_PUBLIC_API_TOKEN,
            }
        })

        const result = res.data.passages[0];
        
        return result;
    } catch (error) {
        return "";
    }

    // Unreachable
}

export default fetchVerse;

