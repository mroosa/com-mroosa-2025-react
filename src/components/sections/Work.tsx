const Work = () => {
    return (
        <section id="work" className="alt">
              <div className="contain" role="presentation">
                  <h2>Work</h2>
                  <div className="projects" role="presentation">

                  {/* <?php
                      $proj_data = json_decode(file_get_contents('data/projects.json'));
                      $count = 0;

                      foreach($proj_data->projects as $project):
                          if(!isset($project -> hide) || $project -> hide !== true):
                              $count++;
                              $projNum = ($count < 10) ? sprintf("%'.02d",$count): $count;
                              $checked = ($count===1) ? " checked": "";
                  ?> */}
                      <div className="project" role="presentation">
                          <input type="radio" id="<?php echo $project->id ?>" name="project" />
                          <label htmlFor="<?php echo $project->id ?>">
                            <h3><span className="proj-num">00</span><span className="proj-ttl"><span className="dots">::</span><span className="ttl">Project Title</span></span></h3>
                            </label>
                          <div className="project-nfo" role="presentation">


                              {/* <?php
                                  # check for tags
                                  if ((isset($project->tags) && count($project->tags) > 0) || (isset($project->awards) && count($project->awards > 0))): 
                                      include './templates/tags.php';
                                  endif;
                              ?>
                              <?php
                                  # check for media
                                  if (isset($project->media)):
                                      include './templates/media.php';
                                  endif;
                              ?>
                              <?php if (isset($project->description)): ?> */}
                              <div className="project-dsc" aria-label="Project Description"><p>Project Description</p></div>
                              {/* <?php endif; ?> */}

                                      
                          </div>
                      </div>

                  {/* <?php 
                          endif;
                      endforeach; 
                  ?> */}
                  </div>
              </div>
        </section>
    )
}

export default Work;