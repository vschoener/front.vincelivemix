function Footer() {
    return (
      <>
        <footer className="footer-area section-padding-80-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">About Me</h4>
                  <p>
                    I'm Vincent, 33 years old working as a Software Engineer. I started to mix song during middle school and since then I keep
                    mixing House Electro mix. I Love EDM and some underground music.
                  </p>
                  <div className="copywrite-content">
                    {/*<p>&copy;*/}

                    {/*  Copyright &copy;*/}
                    {/*  <script>document.write(new Date().getFullYear());</script>*/}
                    {/*  All rights reserved | This template is made with <i className="fa fa-heart-o"*/}
                    {/*                                                      aria-hidden="true"></i> by <a*/}
                    {/*    href="https://colorlib.com" target="_blank">Colorlib</a></p>*/}
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                {/*<div className="single-footer-widget mb-80">*/}
                {/*  <h4 className="widget-title">Categories</h4>*/}

                {/*  <nav>*/}
                {/*    <ul className="catagories-nav">*/}
                {/*      <li><a href="#">Entrepreneurship</a></li>*/}
                {/*      <li><a href="#">Media</a></li>*/}
                {/*      <li><a href="#">Tech</a></li>*/}
                {/*      <li><a href="#">Tutorials</a></li>*/}
                {/*    </ul>*/}
                {/*  </nav>*/}
                {/*</div>*/}
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">Lastest Episodes</h4>

                  <div className="single-latest-episodes">
                    <p className="episodes-date">September 29, 2019</p>
                    <a href="https://vincelivemix.s3.eu-west-3.amazonaws.com/episodes/Vince+Live+Mix+72+-+Resurrection.mp3" className="episodes-title">Live mix 72 - Resurrection!</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">Follow Me</h4>
                  <div className="footer-social-info">
                    <a href="https://www.facebook.com/pg/vincelivemix" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
                      className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/vincelivemix" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i
                      className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/vincent.schoener" className="instagram" data-toggle="tooltip" data-placement="top" title="Instagram"><i
                      className="fa fa-instagram"></i></a>
                    {/*<a href="#" className="youtube" data-toggle="tooltip" data-placement="top" title="YouTube"><i*/}
                    {/*  className="fa fa-youtube-play"></i></a>*/}
                  </div>
                  {/*<div className="app-download-button mt-30">*/}
                  {/*  <a href="#"><img src="/img/core-img/app-store.png" alt="" /></a>*/}
                  {/*  <a href="#"><img src="/img/core-img/google-play.png" alt="" /></a>*/}
                  {/*</div>*/}
                </div>
              </div>

            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer
