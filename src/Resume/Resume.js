import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div className='resumePage'>
        <section className="experience">
          <h3>EXPERIENCE</h3>
          <h4>Bloc, Jacksonville, Fl<span className='titles'> - Web Developer Apprenticeship</span></h4>
          <p className='date'>March 2019 - Present (6 months)</p>
          <ul>
            <li>Learned industry best practices and practical software development standards with a
              focus on HTML5, CSS3, JavaScript, React, Node and jQuery</li>
            <li>Created and deployed responsive mobile-first applications while learning new languages
              and frameworks by collaborating several hours every week with a senior web developer</li>
            <li>Currently developing server-side skills with Node.js, PostgreSQL and Redux</li>
          </ul>
          <h4>Anheuser-Busch, Jacksonville, Fl<span className='titles'> - Business Process Manager</span></h4>
          <p className='date'>April 2016 - March 2019 (3 years)</p>
          <p>Selected by the Senior Operations Manager to lead the Operations Maintenance Department and
            manage over 60 technicians, salaried employees, and peers after successfully managing process
            improvement and implementation on our Draught Line and Palletizers. Additionally selected over
            peers to lead a critical production line that was underperforming.</p>
          <ul>
            <li>As a process improvement initiative, used SQL database queries through Microsoft Excel to
              develop visual data displays for shift kick-off meetings</li>
            <li>Developed and executed a preventative maintenance program that increased our equipment
              reliability metric by 43% year over year</li>
            <li>Created a maintenance scorecard for performance review that was adopted as the North American
              Zone template</li>
            <li>Successfully managed and forecasted expenses with a parts budget in excess of $3.4 million</li>
            <li>Fostered an environment of ownership and accountability that delivered a 25% increase in
              technician engagement surveys from the previous year</li>
            <li>Exceeded company targets for line efficiency on the Draught Line by 6.1%</li>
            <li>Implemented new procedures to monitor and improve process loss on the Draught Line to reduce
              loss by 16.1%</li>
            <li>Developed and implemented Palletizer Speed Reference Charts to optimize performance through
              new routine maintenance inspections and documentation</li>
          </ul>
          <h4>Anheuser-Busch, Jacksonville, Fl<span className='titles'> - Brewery Group Manager</span></h4>
          <p className='date'>June 2015 - March 2016 (10 months)</p>
          <p>Led teams of skilled technicians through troubleshooting complex problem sets in a highly
            automated, lean manufacturing production facility to achieve key performance indicators, and
            ensure excellent process performance and product quality.</p>
          <ul>
            <li>Jacksonville Brewery awarded first place in the 2015 Brewery Excellence Program; additionally
              awarded the Packaging Cup for the best performing packaging operations out of 12 breweries</li>
            <li>Successfully maintained the highest line efficiency and overall equipment effectiveness amongst
              peers in my first 16 weeks in position; exceeded the company target for line efficiency at a 5.6%
              increase</li>
            <li>Promoted to positions of increased responsibility within six months</li>
          </ul>
          <h4>US Army<span className='titles'> - Infantry Officer</span></h4>
          <p className='date'>May 2005 - May 2015 (10years)</p>
          <p>Selected by executive-level leadership to lead organizations of 36-161 personnel through intensive
            training cycles in preparation for yearlong deployments into combat.</p>
          <ul>
            <li>Consistently rated in the top 5-10% of my peer group throughout tenure in numerous
              leadership positions of increasing responsibility</li>
            <li>Mentored, evaluated, and provided developmental feedback to over 200 future Army officers on
              their leadership attributes and planning competencies</li>
            <li>Success in planning, coordination, and execution oversight as an Assistant Operations Manager of
              an organization of over 700 personnel led to selection of direct action Operational Management in
              combat</li>
            <li>Key projects included full contracting of Iraqi vendors through scope of work development,
              bidding, quality control, and payment transactions; development of a systematic operational base
              closure plan that was executed and refined on four active combat locations in Iraq and then
              adopted as a best practice to implement across numerous other organizations; led a Joint Human
              Intelligence Team that developed lethal actionable operations against terrorist networks while also
              engaging influential local Afghan leaders to develop the first secure elementary school in our
              area; led planning effort to logistically redeploy an organization of 760 personnel, over 75
              armored vehicles, and hundreds of containerized units from Iraq to the United States; developed
              and executed a multi-week partnered training exercise with the Philippine Army in the Republic
              of the Philippines</li>
            <li>Honorably discharged veteran with numerous commendations for individual achievement
              and exceptionally meritorious service</li>
          </ul>
        </section>
        <section className='education'>
          <h3>EDUCATION</h3>
          <h4>United States Military Academy<span className='titles'> - Electrical Engineering (B.S.)</span></h4>
          <p className='date'>West Point, NY 2005</p>
        </section>
      </div>
    );
  }
}
