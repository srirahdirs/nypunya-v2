import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoTest = () => {
    return (
        <div>
            <Helmet>
                <title>TEST PAGE - SEO Working!</title>
                <meta name="description" content="This is a test description to verify SEO is working" />
                <meta name="keywords" content="test, seo, working" />
            </Helmet>
            <h1>SEO Test Page</h1>
            <p>This page should have a title "TEST PAGE - SEO Working!" and description "This is a test description to verify SEO is working"</p>
            <p>Check the browser title bar and view page source to verify.</p>
        </div>
    );
};

export default SeoTest;
