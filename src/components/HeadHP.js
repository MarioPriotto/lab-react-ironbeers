// Alinhando conteúdo dentro de uma DIV de forma VERT E HORIZ
// Faltou colocar a div pai como "display: table" - mas funcionou
// https://www.vanseodesign.com/blog/demo/vertical-centering/table-cell.php


// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest

// Site mostra como usar icones de xxx no REAC
// https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-pt

// Outro site que mostra como usar icones de xxx no REAC
// https://fontawesome.com/docs/web/use-with/react/add-icons


// Site que informa a cor de um certo ponto numa imagem de um arquivo:
// https://angrytools.com/img-colorpicker/


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

function HeadHP () {
    return (
        <div>

            <div style={{display: 'table-cell', verticalAlign: 'middle', width: '27rem', height: '5rem', backgroundColor: 'rgba(61,196,252,255)' }} >
                <Link to='/' className='text-decoration-none'>
                    <FontAwesomeIcon icon={faHome} style={{color: 'white'}} size={'2x'} />
                </Link>
            </div>

        </div>
    )
}

export default HeadHP

