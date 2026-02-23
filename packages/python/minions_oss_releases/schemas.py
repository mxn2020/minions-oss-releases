"""
Minions Oss-releases SDK — Type Schemas
Custom MinionType schemas for Minions Oss-releases.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

release_type = MinionType(
    id="oss-releases-release",
    name="Release",
    slug="release",
    description="A versioned release of an OSS project.",
    icon="🚀",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="version", type="string", label="version"),
        FieldDefinition(name="changelog", type="string", label="changelog"),
        FieldDefinition(name="featureIds", type="string", label="featureIds"),
        FieldDefinition(name="releasedAt", type="string", label="releasedAt"),
        FieldDefinition(name="publishedTo", type="string", label="publishedTo"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

publish_receipt_type = MinionType(
    id="oss-releases-publish-receipt",
    name="Publish receipt",
    slug="publish-receipt",
    description="Confirmation of a package publish to a registry.",
    icon="✅",
    schema=[
        FieldDefinition(name="releaseId", type="string", label="releaseId"),
        FieldDefinition(name="registry", type="select", label="registry"),
        FieldDefinition(name="packageUrl", type="string", label="packageUrl"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

custom_types: list[MinionType] = [
    release_type,
    publish_receipt_type,
]

