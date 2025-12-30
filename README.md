# marisadi.github.io

Your daily workflow (lock this in)
	1.	cd portfolio-site
	2.	sass --watch scss/style.scss css/style.css
    3.	Edit in VS Code
	4.	When ready:
        git add .
        git commit -m "Update layout / works"
        git push


WORK BLOCKS template for index.html:

SCSS defined grid sizes (add more if you want):
.span-12 { grid-column: span 12; }
.span-8  { grid-column: span 8; }
.span-6  { grid-column: span 6; }
.span-4  { grid-column: span 4; }

<!-- WORK BLOCK 4 -->
          <section class="work-block" aria-label="Project Title">
            <header class="work-block__text">
              <h2 class="work-title"><i>Work Title</i>, &nbsp;2000</h2>
              <p>
                Materials.<br />
                <span class="muted">A malleable interactive sound sculpture.</span>
              </p>
             <p class="muted right"> 
              Text
            </p> 
            </header>

            <div class="work-block__grid">
              <a class="tile span-8" href="work-project.html">
                <img src="images/project-02.jpg" alt="Project Title — view 2" loading="lazy" decoding="async"
                  width="1200" height="1600">
              </a>
              <a class="tile span-4" href="work-project.html">
                <img src="images/project-02.jpg" alt="Project Title — view 2" loading="lazy" decoding="async"
                  width="1200" height="1600">
              </a>

              <a class="tile span-12" href="work-project.html">
                <img src="images/project-03.jpg" alt="Project Title — view 3" loading="lazy" decoding="async"
                  width="2000" height="1200">
              </a>
              <!-- Two-up row -->
              <a class="tile span-6" href="work-project.html">
                <img src="images/wip-01.jpg" alt="Resistance WIP — view 1" loading="lazy" decoding="async" width="1600"
                  height="1067">
              </a>

              <a class="tile span-6" href="work-project.html">
                <img src="images/wip-02.jpg" alt="Work — view 2" loading="lazy" decoding="async" width="1400"
                  height="1800">
              </a>

              <!-- Art-directed mix -->
              <a class="tile span-4 tall" href="work-project.html">
                <img src="images/wip-03.jpg" alt="Work — view 2" loading="lazy" decoding="async" width="1200"
                  height="1600">
              </a>

              <a class="tile span-8" href="work-project.html">
                <img src="images/wip-04.jpg" alt="Work — view 2" loading="lazy" decoding="async"
                  width="2000" height="1200">
              </a>
            </div>
          </section>

