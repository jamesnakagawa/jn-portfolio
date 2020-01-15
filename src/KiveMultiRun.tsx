import * as React from 'react';

export const KiveMultiRun: React.FC = () => {
    return (
        <div>
          <h3>Project Study: Kive Multi-Run</h3>

          <h4>Background</h4>
          <p>Kive is a framework for the version control of bioinformatics research. I contributed to this project from approximately 2014 until 2017. This is a summary of one of the more notable interface on the Kive project.</p>
          
          <h4>Motivations</h4>
          <p>Kive includes a rich interface for creating stepped and versioned processes ("pipelines"). Once we've created that pipeline, we'll want to run it using specified data. Often the person running the pipeline is different than the person who created it.</p>
          <p>In addition, we may want to run the pipeline many times using different input data. Since pipelines run in the background and in parallel, we can start a whole bunch of runs all at once, provided we have a sufficiently powerful interface.</p>
          
          <h4>Requirements</h4>
          <p>This interface would allow the user to search and filter the database for their datasets, and attach those datasets to pipeline input nodes. In addition, the user can decide at any point to create a "batch" of runs rather than a single run, and can also change the size of the batch at any point without having to start over. Finally, the user can name each run and to manage user permissions.</p>
          
          <h4>Deployment</h4>
          <p>This is a lot of functionality to pack into a single-page interface, but with good reason. We wanted the user to have the flexibility to do things in any order, while being subtly guided to do things in a specific, intuitive order.</p>
          <p>The only information that precedes this page is that the user would like to run data through pipeline X. So to start, we assume that the user wants to run pipeline X once.</p>
          <p>Through guided use of colour, the next steps are:</p>
          <ul>
            <li>"Which input do I want to fill first?"</li>
            <li>"With which data?"</li>
            <li>"What about the next input?" ... until all inputs are accounted for.</li>
          </ul>
          <p>Here we see a basic pipeline run being set up:</p>
          <img src="/img/intv/kive_expand_panel.gif" width="600"/>
          <p>Notice the order of events. We tried to order these events in a sequence that would line up with how the user thinks.</p>
          <p>When the dataset browser slides out, you'll notice that the file names are truncated (with "&hellip;") and are shown in full when the mouse hovers over. With screen real estate being this limited, this is one step I took to pack more data in without omitting key information.</p>
          <p>At this point the user can start their run. However, we could also choose to do a whole bunch of runs at the same time.</p>
          <img src="/img/intv/kive_add_runs.gif" width="600"/>
          <p>Using the +/&minus; buttons, we can extend the table to however many runs we choose. Then we can go through the same process as before to specify data for each one.</p>
          <p>Initially we placed these controls below the table, but this proved to be inconvenient when you tried to add multiple rows quickly. By keeping it on a fixed panel, the button doesn't move when you click it.</p>
          <img src="/img/intv/kive_search_widgets.gif" width="600"/>
          <p>We can also choose to use the same dataset for every run in a specific input.</p>
          <img src="/img/intv/kive_name_prefix.gif" width="600"/>
          <p>We may want to name every run, although this is not required. Unspecified fields are given an auto-generated name. The naming fields use keydown events to detect text carat movements, so that once the prefix is set in the "prefix" field, it's essentially static in the individual naming fields. Even pressing "Ctrl+A" will only select the portion of the name after the prefix.</p>
          <img src="/img/intv/kive_permissions.gif" width="600"/>
          <p>We can also manage user permissions from this page. The permissions widget is a UI feature we include on a lot of pages, so it's fairly self-contained. Since it's not essential to the workflow here, we tuck it away from sight in the overview.</p>

          <h4>Responsive Layout</h4>
          <p>Since we can have any number of inputs, and any number of runs, we have an n-by-n table that can scroll in either direction. Then we have controls which pertain to the entire table, and other controls (the dataset search panel) which pertain to one cell at a time.</p>
          <p>While the table can scroll, the other UI elements need to stay put in the screen. That means they must be arranged within a single screen with no scrolling.</p>
          <img src="/img/intv/kive_resize.gif" width="600"/>
          <p>Using responsive CSS, we optimized this interface for a number of screen sizes. Kive is a desktop utility for use on intranets, so mobile screens were not considered, although it would probably be perfectly functional on your old VGA monitor.</p>
        </div>
    );
}