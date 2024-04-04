import React from 'react'
import GitHubButton from 'react-github-button';
import './style.css'

export const Footer = () => {
    return (
        <footer className="page-footer font-small special-color-dark pt-4">

            <div className='flex-wrap' style={{ textAlign: "center" }}>
                <div className='m-2'><GitHubButton href="https://github.com/Riturajsharma707" data-show-count="true" aria-label="Follow @Rituraj on GitHub">Follow @Riturajsharma</GitHubButton></div>
                <GitHubButton href="https://github.com/Riturajsharma707" data-icon="octicon-star" data-show-count="true" aria-label="Star Riturajsharma707/Pathfinder-2.0 on GitHub">Star</GitHubButton>
                &nbsp;
                <GitHubButton href="https://github.com/Riturajsharma707" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork Riturajsharma707/Pathfinder-2.0 on GitHub">Fork</GitHubButton>
                &nbsp;
                <img className='mb-2' src="https://visitor-badge.laobi.icu/badge?page_id=Riturajsharma707" alt="Hits" />
            </div>

            <div className="footer-copyright text-center py-3">© 2024 Copyright:
                <a href="https://github.com/riturajsharma707" style={{ color: "#65b6f0" }}> Ritu raj sharma</a>
            </div>


        </footer>
    );
}
