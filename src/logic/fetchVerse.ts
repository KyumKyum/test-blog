import axios from "axios";

//async function fetchVerse(){}

const fetchVerse = async (book:string): Promise<string> => {
    const url = 'https://api.esv.org/v3/passage/text/?q=' + book;
    
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': 'Token e04f8b87f8a98e90d1b52f1bd8fe09cac8a78c2d'
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

