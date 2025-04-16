     function getCareerAdvice() {
      const name = document.getElementById('name').value.trim();
      const interest = document.getElementById('interest').value;
      const skills = document.getElementById('skills').value.toLowerCase();
      const goals = document.getElementById('goals').value.toLowerCase();

      let advice = `Hello ${name}, based on your interest in ${interest}, `;

      if (interest === 'technology') {
        advice += 'you might explore careers like Software Developer, Data Scientist, or Cybersecurity Analyst.';
      } else if (interest === 'medicine') {
        advice += 'you might consider being a Doctor, Nurse, Medical Researcher, or Therapist.';
      } else if (interest === 'arts') {
        advice += 'you could be a Graphic Designer, Musician, or Content Creator.';
      } else if (interest === 'business') {
        advice += 'you could pursue roles like Business Analyst, Entrepreneur, or Marketing Manager.';
      } else if (interest === 'education') {
        advice += 'you could be a Teacher, Academic Researcher, or Educational Consultant.';
      }

      if (skills.includes('coding')) {
        advice += ' Your coding skills are highly valuable in many industries.';
      }
      if (skills.includes('public speaking')) {
        advice += ' Public speaking will help you in leadership and communication-heavy roles.';
      }
      if (skills.includes('drawing') || skills.includes('design')) {
        advice += ' Artistic skills are great for creative roles like design and media.';
      }

      if (goals.includes('help people')) {
        advice += ' Since you want to help people, healthcare, education, or non-profit work might suit you.';
      }
      if (goals.includes('earn well')) {
        advice += ' If high earnings are important, consider careers in tech, business, or finance.';
      }
      if (goals.includes('travel')) {
        advice += ' Careers in travel, consulting, or remote tech jobs could be exciting for you.';
      }

      document.getElementById('result').style.display = 'block';
      document.getElementById('result').innerText = advice;
    }

