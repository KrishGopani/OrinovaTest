import React from 'react'
import styles from './CeoStyles.module.css';
import Drive from  "./AboutUsImg/ceo.jpg";
// import Drive from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYzTJdxsIuV1Lmxi9aTDTVnOJhHF1l81MHA&usqp=CAU';

const Ceo = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h3>Company's Founder & Chairman</h3>
            <h2>Dr. Sourabh Kumar</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            {/* <button>Browse Cars</button> */}
        </div>
    </div>
  )
}

export default Ceo;