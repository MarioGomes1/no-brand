The mobile-first pre-defined media queries:
/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
/* @media (min-width: 768px) {} */

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* 2xl */
/* @media (min-width: 1536px) {} */

The desktop-first pre-defined media queries:
/* 2xl */
@media (max-width: 1536px) {}

/* xl */
@media (max-width: 1280px) {}

/* lg */
@media (max-width: 1024px) {}

/* md */
@media (max-width: 768px) {}

/* sm */
@media (max-width: 640px) {}

/* xs */
@media (max-width: 475px) {}

Mobile container utility class:
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* xs */
@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
}

/* sm */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

Desktop container utility class:
.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}