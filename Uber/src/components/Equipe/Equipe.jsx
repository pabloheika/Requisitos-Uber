import React from 'react';
import styles from './Equipe.module.css';

const Equipe = ({ projectTitle = 'Projeto de Engenharia Reversa - Trainee Engnet' }) => {
  const contributors = [
    {
      name: 'Caio Sabino',
      github: 'https://github.com/caiomsabino',
      avatar: 'https://github.com/caiomsabino.png'
    },
    {
      name: 'Erick Okamura',
      github: 'https://github.com/Roomarok',
      avatar: 'https://github.com/Roomarok.png'
    },
    {
      name: 'Ester Chaves',
      github: 'https://github.com/EsterChaves',
      avatar: 'https://github.com/EsterChaves.png'
    },
    {
      name: 'Lys Coutinho',
      github: 'https://github.com/lyscoutinho',
      avatar: 'https://github.com/lyscoutinho.png'
    },
    {
      name: 'Pablo Costa',
      github: 'https://github.com/pabloheika',
      avatar: 'https://github.com/pabloheika.png'
    }
  ];

  return (
    <section className={styles.equipeContainer}>
      <div className={styles.headerSection}>
        <h3 className={styles.projectTitle}>{projectTitle}</h3>
        <p className={styles.projectDescription}>
          Este site contém o projeto desafio de engenharia reversa do aplicativo Uber, 
          produzido para a primeira entrega do processo Trainee da empresa junior de 
          Engenharia de Redes da UnB, Engnet.
        </p>
      </div>
      
      <section className={styles.contributorsSection}>
        <h3 className={styles.contributorsTitle}>Contribuidores</h3>
        <div className={styles.contributorsTable}>
          <div className={styles.tableRow}>
            {contributors.map((contributor, index) => (
              <div key={index} className={styles.contributorCell}>
                <a 
                  href={contributor.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contributorLink}
                >
                  <div className={styles.avatarContainer}>
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name} 
                      className={styles.avatar}
                      onError={(e) => {
                        e.target.src = 'https://avatars.githubusercontent.com/u/0?v=4'; // fallback
                      }}
                    />
                  </div>
                  <span className={styles.contributorName}>{contributor.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Equipe;
