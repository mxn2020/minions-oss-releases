"""
Minions Oss-releases Python SDK

Release definitions, changelogs, and publish receipts
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Oss-releases.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
