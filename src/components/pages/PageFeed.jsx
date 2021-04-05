import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";
import CommonPost   from "../common/CommonPost.jsx";

import '../../style/feed.scss';

class PageFeed extends Component {
    state = {
      posts: [
        {
          provider: {
            avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",
            name: "Digi"
          },
          title: "Se fac eforturi uriase pentru mutarea navei care blocheaza Canalul Suez. Operatiunea, insa, ar putea dura cateva saptamani",
          description: "Continua eforturile pentru mutarea Ever Given, nava-container cu o lungime de 400 de metri care blocheaza Canalul Suez. Sunt utilizate excavatoare pentru indepartarea nisipului si noroiului de la prova navei, in timp ce remorcherele sunt utilizate pentru a o muta.",
          thumbnail: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI1JTJGMTMwNTIzMl8xMzA1/MjMyX25hdmEtYmxvY2F0YS1zdWV6Lmpw/ZWcmdz03ODAmaD00NDAmaGFzaD0zZTY5/MjI1NDVjM2MwNmMzZmU5ODE0YjVlZTZhYmU5MA==.thumb.jpg",
          url: "https://www.digi24.ro/stiri/externe/se-fac-eforturi-uriase-pentru-mutarea-navei-care-blocheaza-canalul-suez-operatiunea-insa-ar-putea-dura-cateva-saptamani-1474069",
          fake: 4
        },
        {
          provider: {
            avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",
            name: "Digi"
          },
          title: "Se fac eforturi uriase pentru mutarea navei care blocheaza Canalul Suez. Operatiunea, insa, ar putea dura cateva saptamani",
          description: "Continua eforturile pentru mutarea Ever Given, nava-container cu o lungime de 400 de metri care blocheaza Canalul Suez. Sunt utilizate excavatoare pentru indepartarea nisipului si noroiului de la prova navei, in timp ce remorcherele sunt utilizate pentru a o muta.",
          thumbnail: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI1JTJGMTMwNTIzMl8xMzA1/MjMyX25hdmEtYmxvY2F0YS1zdWV6Lmpw/ZWcmdz03ODAmaD00NDAmaGFzaD0zZTY5/MjI1NDVjM2MwNmMzZmU5ODE0YjVlZTZhYmU5MA==.thumb.jpg",
          url: "https://www.digi24.ro/stiri/externe/se-fac-eforturi-uriase-pentru-mutarea-navei-care-blocheaza-canalul-suez-operatiunea-insa-ar-putea-dura-cateva-saptamani-1474069",
          fake: 4
        },
        {
          provider: {
            avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",
            name: "Digi"
          },
          title: "Se fac eforturi uriase pentru mutarea navei care blocheaza Canalul Suez. Operatiunea, insa, ar putea dura cateva saptamani",
          description: "Continua eforturile pentru mutarea Ever Given, nava-container cu o lungime de 400 de metri care blocheaza Canalul Suez. Sunt utilizate excavatoare pentru indepartarea nisipului si noroiului de la prova navei, in timp ce remorcherele sunt utilizate pentru a o muta.",
          thumbnail: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI1JTJGMTMwNTIzMl8xMzA1/MjMyX25hdmEtYmxvY2F0YS1zdWV6Lmpw/ZWcmdz03ODAmaD00NDAmaGFzaD0zZTY5/MjI1NDVjM2MwNmMzZmU5ODE0YjVlZTZhYmU5MA==.thumb.jpg",
          url: "https://www.digi24.ro/stiri/externe/se-fac-eforturi-uriase-pentru-mutarea-navei-care-blocheaza-canalul-suez-operatiunea-insa-ar-putea-dura-cateva-saptamani-1474069",
          fake: 4
        },
        {
          provider: {
            avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",
            name: "Digi"
          },
          title: "Se fac eforturi uriase pentru mutarea navei care blocheaza Canalul Suez. Operatiunea, insa, ar putea dura cateva saptamani",
          description: "Continua eforturile pentru mutarea Ever Given, nava-container cu o lungime de 400 de metri care blocheaza Canalul Suez. Sunt utilizate excavatoare pentru indepartarea nisipului si noroiului de la prova navei, in timp ce remorcherele sunt utilizate pentru a o muta.",
          thumbnail: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI1JTJGMTMwNTIzMl8xMzA1/MjMyX25hdmEtYmxvY2F0YS1zdWV6Lmpw/ZWcmdz03ODAmaD00NDAmaGFzaD0zZTY5/MjI1NDVjM2MwNmMzZmU5ODE0YjVlZTZhYmU5MA==.thumb.jpg",
          url: "https://www.digi24.ro/stiri/externe/se-fac-eforturi-uriase-pentru-mutarea-navei-care-blocheaza-canalul-suez-operatiunea-insa-ar-putea-dura-cateva-saptamani-1474069",
          fake: 4
        }
      ]
    };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar />
            <main>
              {this.state.posts.map(post => {
                return <CommonPost {...post} />
              })}
            </main>
            <CommonFooter />
        </React.Fragment>
      );
    }
}

export default PageFeed;