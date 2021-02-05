import { useState, useEffect } from 'react'
import Icon from 'components/templates/icon'
import { getLang } from 'lib/helpers'

const Footer = () => {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    setTimeout(() => {
      setLang(getLang())
    }, 1000)
  }, [])
  return (
    <div id="footer">
      <div className="container">
        <div className="upper">
          <section>
            <h4>About</h4>
            <a href={`https://becaz.com/${lang}/sub/introduction`}>Introduction</a>
            <a href={`https://becaz.com/${lang}/sub/inspire`}>We inspire</a>
            <a href={`https://becaz.com/${lang}/sub/no-banks`}>No banks required</a>
            <a href={`https://becaz.com/${lang}/sub/becaz-coin`}>What is Becaz coin (BCZ)?</a>
            <a href={`https://becaz.com/${lang}/sub/earn-money`}>Earn money</a>
          </section>
          <section>
            <h4>Legal</h4>
            <a href={`https://becaz.com/${lang}/legal/user-terms`}>Terms of use</a>
            <a href={`https://becaz.com/${lang}/legal/privacy-policy`}>Privacy policy</a>
            <a href={`https://becaz.com/${lang}/legal/tutor-terms`}>Tutor terms</a>
          </section>
          <section>
            <h4>More</h4>
            <a href="https://becaz.com/">Popular courses</a>
            <a href={`https://becaz.com/${lang}/faq`}>FAQ</a>
            <a href="http://becaz.org/buy">Buy Becaz coins (BCZ)</a>
          </section>
          <section>
            <h4>We Have No Borders</h4>
            <img src="/images/map.png" alt="map" />
          </section>
        </div>
        <div className="logo">
          <img src="/images/logo-white.svg" alt="Logo" />
          <span className="cr">&copy; 2021 Becaz. All Rights Reserved.</span>
          <div className="socials">
            <a href="https://twitter.com/becazlearning" target="_blank" rel="noreferrer">
              <Icon title="twitter" size={20} />
            </a>
            <a href="https://www.instagram.com/becazlearning/" target="_blank" rel="noreferrer">
              <Icon title="instagram" size={20} />
            </a>
            <a href="https://www.linkedin.com/company/becazlearning/" target="_blank" rel="noreferrer">
              <Icon title="linkedin" size={20} />
            </a>
            <a href="https://t.me/BecazLearning" target="_blank" rel="noreferrer">
              <Icon title="telegram" size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCB7I6mG5t2svtjhUbMNiGRw" target="_blank" rel="noreferrer">
              <Icon title="youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
