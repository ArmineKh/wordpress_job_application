<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'job-app-wp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+jPOYr~ya4puJRELuWrV=aGq`*{TpVm>bW2n7)HAB_dae]~iDc{G|O2*8r^lUZij' );
define( 'SECURE_AUTH_KEY',  'eswrMS!a696(.XP$9G,(~<LQS[=3j IAT?GOzP>/zB~=(2]1Lvy`I Qt7GsQ;{OP' );
define( 'LOGGED_IN_KEY',    'Xm9[U (hrx`%0Y,_2.3_GZSDGyYCJ<W*4_uxz~t[;h^N]#jdqUQz2#11&R/oXfZa' );
define( 'NONCE_KEY',        '_}cp@pZ,0U73$&3)[sul5T}*j=vg/_u}9h>II=,Clix>^>IWi5rT d19A96cZz];' );
define( 'AUTH_SALT',        'Ofqh*kKo({f18{C6bQPqLrY[qzMN/OcNho03btli)fND6`v}1Q/a58B/:BHR.Qm1' );
define( 'SECURE_AUTH_SALT', '`xWlcRS_)$b4I,ijm$2}j*PVl&D<=8|eSb;E/1v1=U6?oXk82gtW*SO^:CU|sU6:' );
define( 'LOGGED_IN_SALT',   'dX5*9:.QNg_!AfXz1F=pQJ[uS=QrwDRiu0^*!~?EXf#JB$93];P7NLH-WobCjT$Q' );
define( 'NONCE_SALT',       '7Q?W2l6)iNKc?GD!EPApNPzihW] {ny#}v*UQlBtT{G`R:Y`t[^Q;QQ&Skm|Y[>(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
