import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("renders homepage with correct content", () => {
  render(<App />);
  
  // Check for main heading
  const mainHeading = screen.getByRole('heading', { name: /Hi, I am Sylvia Malala/i });
  expect(mainHeading).toBeInTheDocument();
  
  // Check for welcome paragraph
  const welcomeParagraph = screen.getByText(/Welcome to my homepage!/i);
  expect(welcomeParagraph).toBeInTheDocument();
  
  // Check for image
  const image = screen.getByAltText(/Myself/i);
  expect(image).toBeInTheDocument();
  
  // Check for About Me section
  const aboutMeHeading = screen.getByRole('heading', { name: /About Me/i });
  expect(aboutMeHeading).toBeInTheDocument();
  
  const aboutMeParagraph = screen.getByText(/I am a passionate developer with a love for creating web applications./i);
  expect(aboutMeParagraph).toBeInTheDocument();
  
  // Check for Contact Me section
  const contactMeHeading = screen.getByRole('heading', { name: /Contact Me/i });
  expect(contactMeHeading).toBeInTheDocument();
  
  const contactMeParagraph = screen.getByText(/You can reach me at:/i);
  expect(contactMeParagraph).toBeInTheDocument();
  
  // Check for social links
  const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
  expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sylvia-malala-a770051b4');
  
  const gitHubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(gitHubLink).toHaveAttribute('href', 'https://github.com/SylviaMalala');
});
