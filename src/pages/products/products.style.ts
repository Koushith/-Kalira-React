import styled from "styled-components"

export const ProductsPageContainer = styled.div`
  .top-filter {
    margin: 2rem 0;
    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #282c3f;
      span {
        font-weight: 300;
      }
    }
  }

  .main-container {
    display: flex;
    justify-content: space-between;
    gap: 6rem;
    .products {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (max-width: 48em) {
    .top-filter {
      margin: 2rem 2rem;
    }

    .main-container {
      flex-direction: column;
      gap: 2rem;
      .sidebar-filter {
        display: none;
      }
      .products {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  @media (max-width: 28em) {
    .main-container {
      flex-direction: column;
      gap: 2rem;

      .sidebar-filter {
        display: none;
      }
      .products {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`
