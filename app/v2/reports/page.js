'use client';

import 'easymde/dist/easymde.min.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { render } from 'jsx-md';

// Get the config values (to be replaced later with text boxes)
import config from '../../../config';

import Loader from './loader';
import Report from './report';

// Dynamically load EasyMDE so it doesn't try to render server side
const EasyMDE = dynamic(
  () => import('react-simplemde-editor'),
  { ssr: false },
);

const defaultOptions = {
  /*
  // To be enabled if this is hosted on the TC website. Might need to swap
  // CSRF for an API token or something.
  uploadImage: true,
  imageMaxSize: 1024 * 1024 * 4, // 4MB
  imageCSRFToken: csrfToken,
  imageUploadEndpoint: 'https://tc.emperorshammer.org/upload-image.php',
  imagePathAbsolute: true,
  */
  autofocus: true,
  previewImagesInEditor: true,
  minHeight: '500px',
  inputStype: 'contenteditable',
  previewClass: ['editor-preview', 'content'],
};

export default function ReportTool() {
  const [loading, setLoading] = useState(false);
  const [activityData, setActivityData] = useState(null);
  const [markdown, setMarkdown] = useState(null);

  // Load up the async jsx-md renderer and create an initial body string.
  // Once this is live, we'll do this after the components gather the necessary
  // data.

  useEffect(() => {
    (async () => {
      if (!loading && activityData) {
        setMarkdown(await render(<Report activityData={activityData} />));
      }
    })();
  }, [loading, activityData]);

  if (!EasyMDE) {
    return 'You should not see this page - this is meant to be rendered through javascript.';
  }

  return (
    <div>
      <Loader
        squadrons={config.squadrons}
        coPIN={config.com.pin}
        onLoadingChange={setLoading}
        onLoaded={setActivityData}
      />

      <hr />

      { loading && 'Loading... ' }

      { activityData && (
        <EasyMDE
          value={markdown}
          options={defaultOptions}
        />
      ) }

      { !loading && !activityData && 'Please enter dates and press go.' }
    </div>
  );
}
