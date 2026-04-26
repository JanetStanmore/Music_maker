# Create a New GitHub Repo (Manual Steps)

I cannot directly create GitHub repositories from this runtime without your GitHub authentication context.
Use these commands locally:

```bash
git checkout work
# optional split only mobile app
git subtree split --prefix mobile -b mobile-split
gh repo create instant-music-lab-mobile --public --source=. --push
```

If you want two repositories:
1. Create `instant-music-lab-web` from root.
2. Create `instant-music-lab-mobile` from `mobile-split` branch.
