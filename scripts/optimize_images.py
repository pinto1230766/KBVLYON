import os
from PIL import Image
import glob

# Sizes for responsive images
sizes = [480, 768, 1024, 1280]

# Directory containing images
image_dir = 'public/images'

# Find all JPG files recursively
jpg_files = glob.glob(os.path.join(image_dir, '**', '*.jpg'), recursive=True)

for jpg_file in jpg_files:
    print(f"Processing {jpg_file}")
    try:
        with Image.open(jpg_file) as img:
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Get original size
            original_width, original_height = img.size

            # Generate WebP for each size
            for size in sizes:
                if size >= original_width:
                    # If size is larger than original, use original
                    resized_img = img
                else:
                    # Resize maintaining aspect ratio
                    ratio = size / original_width
                    new_height = int(original_height * ratio)
                    resized_img = img.resize((size, new_height), Image.Resampling.LANCZOS)

                # Create output path
                base_name = os.path.splitext(jpg_file)[0]
                output_file = f"{base_name}-{size}.webp"

                # Save as WebP
                resized_img.save(output_file, 'WEBP', quality=85)

            # Also save original size as WebP
            output_file = f"{os.path.splitext(jpg_file)[0]}.webp"
            img.save(output_file, 'WEBP', quality=85)

        print(f"Converted {jpg_file}")
    except Exception as e:
        print(f"Error processing {jpg_file}: {e}")

print("Image optimization complete!")