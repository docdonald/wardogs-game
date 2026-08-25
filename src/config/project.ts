/**
 * Project-level flags — describe the AnvilWiki open-source project itself,
 * NOT the demo game. This file survives `apply-template` (unlike the landing
 * page files, which the CLI removes).
 */

/**
 * Whether the project landing page (/landing) exists.
 * When true, the demo site header shows a small hammer icon linking to it,
 * so demo visitors can discover the template behind the demo.
 *
 * `apply-template` flips this to false when it removes the landing page —
 * the header link disappears together with the pages.
 */
// This is a game wiki deployment, so the template/project landing center is
// kept out of the public game navigation and search index. The source remains
// available for maintainers who need the template handbook.
export const landingLinkEnabled = false;
