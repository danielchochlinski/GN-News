import { render, screen } from "@testing-library/react";
import Article from "./Article";
const propsArticle = {
  author: "Daniel",
  description: "Daniel is awesome and so is Krzysztof",
  publishedAt: "today",
  source: {
    id: "BBC",
    name: "BBC News",
  },
  title: "gn News app",
  url: "www.danielchochlinski.dev",
  urlToImage: "/danie.jpeg",
};

test("for article props", () => {
  render(<Article article={propsArticle} />);
  const titleElement = screen.getByText(/gn News app/i);
  expect(titleElement).toBeInTheDocument();
});
