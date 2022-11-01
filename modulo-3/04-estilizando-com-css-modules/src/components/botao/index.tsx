import styles from'./styles.module.css';

export const Botao = () => {
    return (
        <div className={styles.square}>
            <button className={styles.botao}>Texto qualquer</button>
            <p className={styles.legend}>Legenda</p>
        </div>
    );
}

//Estilizando com Stylesheet você cria o arquivo style.css ao invés de
//style.module.css e className="square".

// EM stylesheet
// import './styles.css';

//CSS MODULES EVITA CONFLITOS ENTRE OS COMPONENTES AO TEREM CLASSES CSS
//COM O MESMO NOME. CSS MODULES CRIA AS CLASSES COM NOMES
//ÚNICOS EXEMPLO AO OLHAR NO INSPECIONAR:<button class="styles_botao__eVVPQ">Texto qualquer</button>
//EM Stylesheet o nome seria o que nós criamos, no caso, <button class="botao">Texto qualquer</button>

