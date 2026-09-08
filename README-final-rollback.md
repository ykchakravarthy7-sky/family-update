# Final reveal rollback

The original Family OS version is commit `1fff5e3f7f57b934b6d71ff14a69a39f1f3b3e49`.

The final invitation is installed by `scripts/install-final-invitation.py`, which replaces only the `<section id="final">` element and adds `styles/final-artwork.css`. The approved image is stored at `assets/final-invitation.png`.

To restore the original appearance without rewriting history, restore `index.html` from the original commit and commit that restoration. The other screens and their timing are not modified by the final invitation installer.
