from pathlib import Path
import time

# n=94 110
finnish = Path(
    'kotus-sanalista-v1/kotus-sanalista-suomi.txt').read_text().splitlines()
# n=102 401
english = Path('/usr/share/dict/words').read_text().splitlines()


def find_common(fi, en):
    common = []

    # n**2
    for word in fi:  # 94 110
        if word in en:  # 102 401
            common.append(word)

    return common


# find_common(finnish, english)

"""
for size in range(1_000, 13_000, 1_000):
    start = time.perf_counter()
    find_common(finnish[:size], english[:size])
    end = time.perf_counter()
    print(f'{size}  {end-start}')
"""
