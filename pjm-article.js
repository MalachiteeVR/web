(() => {
  const sidebar = document.getElementById('sidebar');
  const view = document.getElementById('articleView');
  if (!sidebar || !view) return;

  const backLink = sidebar.querySelector('.back-link');
  if (!backLink) return;

  const article = {
    category: 'Energy · Grid Reliability',
    title: 'PJM Interconnection Faces Growing Overload Concerns',
    deck: 'A combination of rising large-load demand, data-center growth, transmission constraints and tight operating conditions is putting new pressure on the largest U.S. regional power grid.',
    byline: 'Technology & Infrastructure Desk · October 15, 2026',
    body: `<p>The PJM Interconnection is facing a difficult balancing act: electricity demand is growing quickly while the transmission and generation system has to keep pace. Recent events have made the problem unusually visible, with PJM issuing operating alerts during periods of tight supply and constrained equipment.</p>

<div class="fact-box"><strong>Why this matters today</strong>PJM serves roughly 67 million people across all or parts of 13 states and the District of Columbia. The operator is simultaneously dealing with large new electricity loads, planned generation and transmission outages, and the need to maintain reliability during unusually demanding weather.</div>

<h2>The immediate pressure is not simply “too much electricity”</h2>
<p>The concern is more complicated than a single shortage number. Grid operators have to keep generation, transmission capacity and demand balanced at the same moment. A generator can exist somewhere on the PJM system and still be unable to solve a local transmission constraint. Likewise, a new data center can have enormous electrical demand while the transmission infrastructure needed to serve it takes years to plan and build.</p>

<p>PJM's October operating updates illustrate the tight conditions. The operator issued Maximum Generation and Load Management Alerts for October 13 and 14 because unusually warm fall weather coincided with planned equipment outages for maintenance and construction. PJM said the alerts did not require action from ordinary customers, but the system was operating with less flexibility than normal.</p>

<h2>Data centers are becoming a major part of the equation</h2>
<p>The rapid expansion of AI and conventional data centers is one of the biggest long-term changes to PJM's demand forecast. PJM expects data-center electricity demand in its territory to grow dramatically, and regulators are now debating how those customers should be tracked, connected and charged for the infrastructure needed to serve them.</p>

<p>On October 12, the Federal Energy Regulatory Commission approved PJM's proposal to establish a registry for data centers and other large loads. The registry is intended to give PJM better information about facilities, including their locations, service dates, power requirements, ramp schedules and backup-generation arrangements.</p>

<p>FERC rejected other parts of PJM's proposal that would have allowed the grid operator to temporarily curtail data-center power during emergencies. Regulators raised questions about why data centers should be disconnected before other large electricity users and about the limits of PJM's authority.</p>

<h2>Ohio is becoming part of the story</h2>
<p>Ohio sits inside PJM's footprint and is attracting some of the country's largest planned data-center developments. On October 13, PJM filed a study agreement involving AEP Ohio and SoftBank Energy affiliates to examine transmission facilities associated with Ohio's request for a State Agreement Approach process.</p>

<p>The next day, Utility Dive reported that PJM planned to study SoftBank's proposed Ohio AI complex, a project described as involving roughly 10 gigawatts of data-center load and approximately 10.2 gigawatts of gas-fired generation, along with major new transmission infrastructure.</p>

<blockquote>The difficult question is no longer whether the grid can connect another large load. It is who pays for the infrastructure, how quickly it can be built, and how the system remains reliable while demand arrives.</blockquote>

<h2>Transmission congestion is another warning sign</h2>
<p>Recent reporting based on PJM's market-monitor data found that congestion costs increased during the first half of 2026 as high-voltage transmission constraints became more significant. PJM has proposed billions of dollars in transmission improvements, but building new lines is a long process involving planning, permitting, cost allocation and local opposition.</p>

<p>This creates a frustrating mismatch. A data center can be planned and financed much faster than a major transmission corridor can be designed, approved and constructed. The result is a grid where the physical ability to deliver electricity can become the limiting factor even when additional generation is being proposed.</p>

<h2>The summer already provided a preview</h2>
<p>PJM experienced substantially tighter conditions during the extreme summer heat. In June, the U.S. Department of Energy issued an emergency order covering the PJM region as soaring demand and limited generation capacity put pressure on the system. PJM subsequently used emergency procedures during periods when demand approached or exceeded previous records.</p>

<p>There was also a striking large-load event in Virginia on July 22, when nearly 4,000 megawatts of data-center load disconnected unexpectedly. PJM said the grid did not suffer significant reliability impacts, but the event produced large swings in voltage and frequency and prompted the operator to examine ride-through requirements for large computational loads.</p>

<h2>So, is PJM about to overload?</h2>
<p>Not in the sense of an imminent system-wide blackout simply because data centers exist. PJM continues to have emergency procedures, reserve resources, demand-response mechanisms and planned generation additions. The more serious concern is structural: demand is arriving quickly enough that transmission, generation procurement and reliability rules are having to change at the same time.</p>

<p>The October alerts are therefore best understood as a warning about operating margin rather than a prediction of collapse. Warm weather and planned outages can temporarily make the system tight. Rapid growth in large electricity users can make those tight periods more difficult to manage over the long term.</p>

<h2>The Malachite Times take</h2>
<p>PJM's problem is becoming a classic infrastructure race. Computers, AI facilities and industrial loads can be deployed rapidly. Power plants, substations and transmission corridors cannot.</p>

<p>The important question for the coming years is not whether America should build more data centers. It is whether the electrical infrastructure can be expanded quickly enough, and whether the costs of that expansion are assigned fairly to the customers creating the additional demand.</p>

<p>For Ohio and the wider PJM footprint, the answer will be measured in more than megawatts. It will show up in transmission projects, utility bills, data-center construction schedules, reliability margins and the increasingly valuable real estate surrounding high-voltage infrastructure.</p>

<p class="article-source-note"><strong>Sources:</strong> PJM Inside Lines and PJM public filings; Federal Energy Regulatory Commission actions reported October 12, 2026; Reuters reporting on PJM transmission and data-center demand; Utility Dive reporting on the Ohio SoftBank project. This article describes current grid conditions and policy disputes, not a prediction of an imminent blackout.</p>`
  };

  const link = document.createElement('button');
  link.className = 'article-link';
  link.dataset.article = 'pjm-overload';
  link.innerHTML = '<span>PJM Grid Pressure</span><small>Energy · October 15</small>';
  sidebar.insertBefore(link, backLink);

  link.addEventListener('click', () => {
    view.innerHTML = '<div class="article-category">' + article.category + '</div><h1 class="article-title">' + article.title + '</h1><p class="article-deck">' + article.deck + '</p><div class="byline">' + article.byline + '</div><div class="article-body">' + article.body + '</div>';
    document.querySelectorAll('.article-link').forEach(b => b.classList.remove('active'));
    link.classList.add('active');
    history.replaceState(null, '', '#pjm-overload');
    document.title = 'The Malachite Times · ' + article.category;
    sidebar.classList.remove('open');
    document.getElementById('menuToggle')?.setAttribute('aria-expanded', 'false');
  });
})();
