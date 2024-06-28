# producer-list-display

function display_producers_list() {
    $args = array(
        'post_type' => 'producer',
        'posts_per_page' => -1,
    );




    $query = new WP_Query($args);
    $output = '<div class="producer-list">';




    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $producer_name = get_the_title();
            $producer_link = get_permalink();
            $producer_image = get_the_post_thumbnail(get_the_ID(), 'thumbnail');




            $output .= '<div class="producer-item">';
            $output .= $producer_image;
            $output .= '<h2><a href="' . $producer_link . '">' . $producer_name . '</a></h2>';
            $output .= '</div>';
        }
    } else {
        $output .= '<p>No producers found.</p>';
    }




    $output .= '</div>';




    wp_reset_postdata();




    return $output;
}
add_shortcode('producers_list', 'display_producers_list

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/producer-list-display.git
cd producer-list-display
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
