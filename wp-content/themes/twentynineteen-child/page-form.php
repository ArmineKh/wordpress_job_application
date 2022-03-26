<?php
/*
Template Name: Form-template
*/
?>

<?php get_header() ?>

	<div id="container">
		<div id="content">
			<?php the_post() ?>
			<div id="post-<?php the_ID() ?>" class="post">
				<div class="entry-content">
                    <div class="container">
                        <div class="row">
                            <div class="form-wrapper">
                                <?php
                            echo do_shortcode('[contact-form-7 id="190" title="Contact form 1"]', true)
                            ?>
                                
                            </div>
                        </div>
                    </div>
				</div>
			</div><!-- .post-->
		</div><!-- #content -->
	</div><!-- #container -->

<?php get_footer() ?>







