import Icon from 'components/templates/icon'

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="upper">
        <section>
          <h4>About</h4>
          <a href="https://becaz.com/en/sub/introduction">Introduction</a>
          <a href="https://becaz.com/tr/sub/inspire">We inspire</a>
          <a href="https://becaz.com/tr/sub/no-banks">No banks required</a>
          <a href="https://becaz.com/tr/sub/becaz-coin">What is Becaz coin (BCZ)?</a>
          <a href="https://becaz.com/tr/sub/earn-money">Earn money</a>
        </section>
        <section>
          <h4>Legal</h4>
          <a href="https://becaz.com/tr/legal/user-terms">Terms of use</a>
          <a href="https://becaz.com/tr/legal/privacy-policy">Privacy policy</a>
          <a href="https://becaz.com/tr/legal/tutor-terms">Tutor terms</a>
        </section>
        <section>
          <h4>More</h4>
          <a href="https://becaz.com/">Popular courses</a>
          <a href="https://becaz.com/tr/faq">FAQ</a>
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

export default Footer
