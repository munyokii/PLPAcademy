def is_point_in_polygon(point, polygon):
    """Determine if a point (x, y) lies inside a polygon defined by a list of vertices."""
    x, y = point
    n = len(polygon)
    inside = False

    p1x, p1y = polygon[0]
    for i in range(n + 1):
        p2x, p2y = polygon[i % n]

        # Check if the point is aligned with an edge
        if y > min(p1y, p2y):
            if y <= max(p1y, p2y):
                if x <= max(p1x, p2x):

                    # Compute the x-coordinate of intersection
                    if p1y != p2y:
                        xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y + 1e-10) + p1x
                    if p1x == p2x or x <= xinters:
                        inside = not inside

        p1x, p1y = p2x, p2y
    return inside

 # Example polygon (a square) and test points
polygon = [(1, 1), (5, 1), (5, 5), (1, 5)]
test_points = [(3, 3), (6, 3), (5, 5), (0, 0)]

for pt in test_points:
    result = is_point_in_polygon(pt, polygon)
    print(f"Point {pt} inside polygon: {result}")
