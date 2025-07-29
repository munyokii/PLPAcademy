import math


def orientation(p, q, r):
    """Return the orientation of the triplet (p, q, r).
       0 -> collinear; >0 -> counterclockwise; <0 -> clockwise."""
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])

def distance_sq(p, q):
    """Return the squared Euclidean distance between points p and q."""
    return (p[0] - q[0])**2 + (p[1] - q[1])**2

def convex_hull(points):

    # Find the point with the lowest y (and lowest x in case of tie)
    start = min(points, key=lambda p: (p[1], p[0]))

    # Sort points by polar angle with the start point
    sorted_points = sorted(points, key=lambda p: (
        math.atan2(p[1] - start[1], p[0] - start[0]), distance_sq(start, p)))

    hull = []
    for p in sorted_points:

        # Remove points that would cause a right (clockwise) turn.
        while len(hull) >= 2 and orientation(hull[-2], hull[-1], p) <= 0:
            hull. pop()
        hull. append(p)

    return hull

# Example points

points = [(0, 3), (1, 1), (2, 2), (4, 4),
          (0, 0), (1, 2), (3, 1), (3, 3)]

hull = convex_hull(points)

print("Convex Hull Points (in order):", hull)