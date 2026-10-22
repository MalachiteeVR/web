(() => {
  const articleView = document.getElementById('articleView');
  const sidebar = document.getElementById('sidebar');
  const backLink = sidebar.querySelector('.back-link');
  const securityArticle = {
    category: 'Security · Infrastructure',
    title: 'MalachiteVR Infrastructure Compromise Resolved',
    deck: 'A confirmed server compromise led to a full infrastructure shutdown, credential rotation, reimaging, and a complete rebuild before services returned online.',
    byline: 'Technology Desk · October 22, 2026',
    body: `<p>MalachiteVR has completed its response to a serious security incident involving the Query Server. The server was <strong>confirmed to have been compromised</strong>, prompting the shutdown of the wider MalachiteVR infrastructure while the incident was investigated and systems were rebuilt.</p><div class="fact-box"><strong>Current status</strong>All MalachiteVR systems have been restored. The compromised infrastructure was taken offline, affected systems were rebuilt, and exposed authentication material was rotated or revoked.</div><h2>The compromise</h2><p>During the investigation, we determined that sensitive infrastructure information was accessible from the compromised server. This included network information, connection logs, service identifiers, application credentials, and authentication material.</p><p>Because the server was compromised, MalachiteVR treated credentials and secrets accessible from that environment as potentially compromised rather than assuming that only known-used credentials were affected.</p><h2>Why everything went offline</h2><p>The response went beyond simply patching the affected server. The wider infrastructure was taken offline to establish a trustworthy baseline and prevent compromised systems or credentials from being used to regain access elsewhere.</p><p>The recovery process included preserving relevant evidence, revoking exposed credentials, rebuilding affected systems, reinstalling software from trusted sources, applying security updates, rebuilding services and network configuration, and reviewing the rebuilt environment before restoring public access.</p><h2>Back online</h2><p>Following the rebuild and security review, <strong>all MalachiteVR systems have been restored</strong> and services are operational again.</p><p>The incident is considered resolved. The rebuilt infrastructure will continue to be monitored following the recovery.</p><blockquote>When the trust boundary is broken, rebuilding the infrastructure is often safer than trying to convince yourself the old machine is clean.</blockquote><h2>What we are not claiming</h2><p>We are not claiming that every piece of information on the compromised server was exfiltrated or that every exposed credential was used. The confirmed fact is that the server was compromised and that sensitive information was accessible from it.</p><p>The response therefore treated potentially exposed credentials and secrets as compromised and replaced them accordingly.</p><p class="article-source-note"><strong>MalachiteVR security notice:</strong> This article documents the confirmed compromise and subsequent recovery of MalachiteVR infrastructure. It intentionally does not publish sensitive operational details or information that could make the rebuilt infrastructure easier to target.</p>`
  };
  const securityLink = document.createElement('button');
  securityLink.className = 'article-link';
  securityLink.dataset.article = 'security-incident';
  securityLink.innerHTML = '<span>Security Incident</span><small>Resolved · Infrastructure</small>';
  sidebar.insertBefore(securityLink, backLink);
  function renderSecurity() {
    articleView.innerHTML = '<div class="article-category">' + securityArticle.category + '</div><h1 class="article-title">' + securityArticle.title + '</h1><p class="article-deck">' + securityArticle.deck + '</p><div class="byline">' + securityArticle.byline + '</div><div class="article-body">' + securityArticle.body + '</div>';
    document.querySelectorAll('.article-link').forEach(button => button.classList.toggle('active', button.dataset.article === 'security-incident'));
    if (location.hash !== '#security-incident') history.replaceState(null, '', '#security-incident');
    document.title = 'The Malachite Times · Security · Infrastructure';
  }
  securityLink.addEventListener('click', () => { renderSecurity(); sidebar.classList.remove('open'); document.getElementById('menuToggle').setAttribute('aria-expanded', 'false'); });
  if (location.hash === '#security-incident') renderSecurity();
})();
