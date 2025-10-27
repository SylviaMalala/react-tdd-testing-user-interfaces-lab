import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

describe('Homepage', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders main heading and welcome message', () => {
    const mainHeading = screen.getByRole('heading', { 
      name: /hi, i am sylvia malala/i,
      level: 1 
    });
    expect(mainHeading).toBeInTheDocument();
    
    const welcomeText = screen.getByText(/welcome to my homepage!/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('displays profile image with correct attributes', () => {
    const profileImage = screen.getByRole('img');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/img1.jpeg');
    expect(profileImage).toHaveAttribute('alt', 'Myself');
  });

  test('renders About Me section with correct content', () => {
    const aboutHeading = screen.getByRole('heading', { 
      name: /about me/i,
      level: 2 
    });
    expect(aboutHeading).toBeInTheDocument();

    const aboutText = screen.getByText(/i am a passionate developer with a love for creating web applications./i);
    expect(aboutText).toBeInTheDocument();
  });

  test('renders Contact Me section with social links', () => {
    const contactHeading = screen.getByRole('heading', { 
      name: /contact me/i,
      level: 2 
    });
    expect(contactHeading).toBeInTheDocument();

    const contactText = screen.getByText(/you can reach me at:/i);
    expect(contactText).toBeInTheDocument();

    const linkedInLink = screen.getByRole('link', { 
      name: /linkedin/i 
    });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sylvia-malala-a770051b4');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByRole('link', { 
      name: /github/i 
    });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/SylviaMalala');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
