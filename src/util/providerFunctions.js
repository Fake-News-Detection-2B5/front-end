export default {
    getProviderFromURL: (url) => {
        if(url.includes('https://www.bbc.com')) {
            return 0;
        }
        if(url.includes('https://www.buzzfeednews.com')) {
            return 1;
        }
        if(url.includes('https://www.dailymail.co.uk')) {
            return 2;
        }
        if(url.includes('https://www.huffpost.com')) {
            return 3;
        }
        if(url.includes('https://www.nbcnews.com')) {
            return 4;
        }
        if(url.includes('https://nypost.com')) {
            return 5;
        }
    },
    getProviderImg: (prov_id) => {
        switch(prov_id) {
            case 0:
                return process.env.PUBLIC_URL + '/res/img/providers/bbc.png';
            case 1:
                return process.env.PUBLIC_URL + '/res/img/providers/buzz.png';
            case 2:
                return process.env.PUBLIC_URL + '/res/img/providers/dailymail.png';
            case 3:
                return process.env.PUBLIC_URL + '/res/img/providers/huff.png';
            case 4:
                return process.env.PUBLIC_URL + '/res/img/providers/nbc.png';
            case 5:
                return process.env.PUBLIC_URL + '/res/img/providers/nypost.png';
        }
    },
    getProviderName: (prov_id) => {
        switch(prov_id) {
            case 0:
                return 'BBC News';
            case 1:
                return 'BuzzFeed News';
            case 2:
                return 'Daily Mail';
            case 3:
                return 'HuffPost';
            case 4:
                return 'NBC News';
            case 5:
                return 'New York Post';
        }
    },
    getProviderURL: (prov_id) => {
        switch(prov_id) {
            case 0:
                return 'https://www.bbc.com/news';
            case 1:
                return 'https://www.buzzfeednews.com';
            case 2:
                return 'https://www.dailymail.co.uk';
            case 3:
                return 'https://www.huffpost.com';
            case 4:
                return 'https://www.nbcnews.com';
            case 5:
                return 'https://nypost.com';
        }
    },
    getProviderDesc: (prov_id) => {
        switch(prov_id) {
            case 0:
                return 'BBC News is an operational business division of the British Broadcasting Corporation (BBC) responsible for the gathering and broadcasting of news and current affairs. The department is the world\'s largest broadcast news organisation and generates about 120 hours of radio and television output each day, as well as online news coverage. The service maintains 50 foreign news bureaus with more than 250 correspondents around the world.';
            case 1:
                return 'BuzzFeed News is an American news website published by BuzzFeed. During its relatively short tenure, it has won the George Polk Award, The Sidney Award, National Magazine Award and National Press Foundation award, as well as being a finalist for Pulitzer Prizes.';
            case 2:
                return 'The Daily Mail is a British daily middle-market newspaper published in London in a tabloid format. Founded in 1896, it is the United Kingdom\'s highest-circulated daily newspaper. Its sister paper The Mail on Sunday was launched in 1982, while Scottish and Irish editions of the daily paper were launched in 1947 and 2006 respectively. Content from the paper appears on the MailOnline website, although the website is managed separately and has its own editor.';
            case 3:
                return 'HuffPost (formerly The Huffington Post until 2017, and sometimes abbreviated HuffPo) is an American news aggregator and blog, with localized and international editions. The site offers news, satire, blogs and original content, and covers politics, business, entertainment, environment, technology, popular media, lifestyle, culture, comedy, healthy living, women\'s interests and local news featuring columnists. It has been described as liberal-leaning.';
            case 4:
                return 'NBC News is the news division of the American broadcast television network NBC. The division operates under NBCUniversal Television and Streaming, a division of NBCUniversal, which is, in turn, a subsidiary of Comcast. The division presides over America\'s number-one-rated newscast, NBC Nightly News, and the longest-running television series in American history, Meet The Press, the Sunday morning program of newsmakers interviews. NBC News also offers 70 years of rare historic footage from the NBCUniversal Archives online.';
            case 5:
                return 'The New York Post (sometimes abbreviated as NY Post) is a conservative daily tabloid newspaper in New York City, United States. The Post also operates NYPost.com, the celebrity gossip site PageSix.com and the entertainment site Decider.com. It was established in 1801 by Federalist and Founding Father Alexander Hamilton and became a respected broadsheet in the 19th century under the name New York Evening Post.';
        }
    }
};