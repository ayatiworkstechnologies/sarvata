import os
import re

app_dir = r"d:\ayati\sarvata\app"

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file in ["page.js", "page.jsx", "page.ts", "page.tsx"]:
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            if "use client" in content or "'use client'" in content or '"use client"' in content:
                # It's a client component. We must remove the metadata we injected.
                # The injected block looks like:
                # export const metadata = {
                #   alternates: { canonical: '/...' },
                # };
                
                # regex to remove the specific injected metadata block
                new_content = re.sub(r"\nexport const metadata = \{\n  alternates: \{ canonical: '[^']+' \},\n\};\n", "", content)
                
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Fixed (removed metadata): {file_path}")
                else:
                    # Maybe it was added to an existing metadata block?
                    # Let's check if export const metadata is still there
                    pass

print("Fix completed.")
