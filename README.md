# Math Study

An English-first (with German language switching), static maths learning website for German primary and secondary school learners. The layout uses a topic navigation sidebar and a lesson area with explanations, visualisations, and practice activities.

## Live website

After GitHub Pages is enabled and the deployment workflow completes, the site will be available at:

https://bowardzhang.github.io/math-study/

## Topics

- **Comparing numbers** — a native, randomly generated ordering activity using fractions, decimal litres, and millilitres. It follows this site’s UI and does not embed the original game.
  - Static URL: https://bowardzhang.github.io/math-study/comparing-decimals.html
- **Fractions and addition** — interactive circle diagrams and fraction strips show equivalent fractions, common denominators and the resulting sum. Includes randomized multiple-choice practice.
  - Static URL: https://bowardzhang.github.io/math-study/adding-fractions.html

- **Solids, nets and views** — an interactive cube net links selected faces to a 3D drawing, with front, side and top views and practice.
  - Static URL: https://bowardzhang.github.io/math-study/solids-and-nets.html
- **Negative numbers** — a movable point on a number line, temperature context and randomized comparison practice.
  - Static URL: https://bowardzhang.github.io/math-study/negative-numbers.html

The selected language is saved in the browser when local storage is available. Reloading the page generates fresh practice questions.

More topics can be added over time.

## Deploy with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Pushes to `main` run the workflow in `.github/workflows/pages.yml`; it publishes the static files to GitHub Pages.

No build step or package installation is needed.
